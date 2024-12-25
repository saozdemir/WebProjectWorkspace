/*
! window.btoa(string)   : metin şifrelemek için.
! window.atob(sring)    : Şifreli metni çözmek için
* */


//? Element seçimi
const leftTextAreaElement = document.querySelector("#leftTextArea");
const rightTextAreaElement = document.querySelector("#rightTextArea");
const encodeButton = document.querySelector("#encodeButton");
const decodeButton = document.querySelector("#decodeButton");
const cleanButton = document.querySelector("#cleanButton");

runEventListeners();

function runEventListeners() {
    encodeButton.addEventListener("click", encode);
    decodeButton.addEventListener("click", decode);
    cleanButton.addEventListener("click", clean);
}

function encode() {
    if (leftTextAreaElement.value == "") {
        alert("Lütfen bir değer giriniz.")
        return;
    }
    rightTextAreaElement.value = window.btoa(leftTextAreaElement.value);
    leftTextAreaElement.value = "";
}

function decode() {
    if (rightTextAreaElement.value == "") {
        alert("Lütfen bir değer giriniz.")
        return;
    }
    leftTextAreaElement.value = window.atob(rightTextAreaElement.value);
    rightTextAreaElement.value = "";
}

function clean() {
    leftTextAreaElement.value = "";
    rightTextAreaElement.value = "";
}