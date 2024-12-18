/**
 * *FETCH API
 * AJAX HttpRequest yerine kullanılan yeni teknoloji
 */

function getStudents(url){
    //? fetch api ile dönen değer Response tipindedir. Asıl değere olaşmak için json() metodu kullanılır.
    fetch(url)
        .then((response)=>{//* json() metodu Promise döndüğü için bir sonraki .then() için return ifadesini kullandık.
            return response.json(); 
        })
        .then((data)=>{
            console.log(data);
        })
        .catch((error)=>{
            console.log(error);
        })
}

getStudents("students.json");


function getData(url){
    fetch(url)
        .then((response) => response.json())//* İlk then Response türünde bir promise dondüren json() metodunu yakalar.
        .then((data) => console.log(data))//* İkinci then Response türünde dönen verinin içindekileri yakalamak için kullanıldı.
        .catch((error) => console.log(error));
}

getData("https://jsonplaceholder.typicode.com/users")
getData("https://jsonplaceholder.typicode.com/albums")


function saveStudent(data){
    fetch("https://jsonplaceholder.typicode.com/users",{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then((response)=>response.json())//? return response.json() ile aynı
        .then((result)=>{console.log("Succes:", result)})
        .catch((error)=>{console.log(error)});
}

saveStudent(null)