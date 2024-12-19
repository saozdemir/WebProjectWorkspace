/**
 * Token: -g7SXwZUnBzwYotfm_FFx1xceMtJMzDf1vRCisOtwHw
 */

const formWrapper = document.querySelector(".form-wrapper");
const form = document.querySelector("#form");
const searchInput = document.querySelector("#searchInput");
const buttonWrapper = document.querySelector(".button-wrapper");
const btnSearch = document.querySelector("#btnSearch");
const btnClear = document.querySelector("#btnClear");
const imageListWrapper = document.querySelector(".imagelist-wrapper");

runEventListeners();

function runEventListeners(){
    form.addEventListener("submit", search);// Form'a submit eventi gelirse search metodunu çalıştır.
    btnClear.addEventListener("click", clear);
}
/**
 * 
 * @param {*} e 
 */
function search(e){
    const value = searchInput.value.trim();

    //* Token ile istekte bulunmak için aşağıdıdaki token yetkilendirmeleri yapıldı.
    fetch(`https://api.unsplash.com/search/photos?query=${value}`, {
        method : "GET",
        headers : {
            Authorization : "Client-ID -g7SXwZUnBzwYotfm_FFx1xceMtJMzDf1vRCisOtwHw"//Token
        },
    })
    .then((response)=>response.json())
    .then((data)=> {
        Array.from(data.results).forEach((image)=>{
            // console.log(image.urls.small);
            addImageToUI(image.urls.small);
        })
    })
    .catch((error)=>console.log(error));

    e.preventDefault();//! sayfa yönlendirmesii kapatma
}
/**
 * Resimleri ekrana ekler
 * @param {*} url 
 */
function addImageToUI(url){
    const div = document.createElement("div");
    div.className = "card";

    const img = document.createElement("img");
    img.setAttribute("src", url);//? src="" şeklinde attribute set etme
    img.height='400';
    img.width = '400';

    div.appendChild(img);
    imageListWrapper.appendChild(div);
}

function clear(e){
    console.log(e.srcElemet.id);
    searchInput.value = "";
    //* imageListWrapper aldtındaki elemanları alır, diziye çevirir ve hepsini tek tek kaldırır.
    Array.from(imageListWrapper.children).forEach((child)=>child.remove());
    // imageListWrapper.innerHTML=""; //Yukarıdaki ile aynı işlemi yapar.
}