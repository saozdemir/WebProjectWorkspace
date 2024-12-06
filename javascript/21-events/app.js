
const clearButton = document.querySelector("#todoClearButton");
//! changeTitle yerine changeTitle() yazılırsa click yapılmadan direkt fonksiyon çalıştırılır.
clearButton.addEventListener("click", changeTitle);

function changeTitle(e) {
    document.querySelectorAll('.card-title')[1].textContent = "Todo başlığı değişti."
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.textContent);
    console.log(e.target.className);
}