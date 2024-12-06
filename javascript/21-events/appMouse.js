/**
 * *MOUSE EVENTLARI
 * 
 * DOMContentLoaded
 * load
 * click
 * dblclick
 * mouseover
 * mouseout
 * mouseenter
 * mousedown
 */

let count = 0;
document.addEventListener("DOMContentLoaded", run);

window.addEventListener("load", run);

const cardTitle = document.querySelectorAll(".card-title")[1];

cardTitle.addEventListener("dblclick", getType);


function run(){
    console.log("Sayfa yüklendi " + count);
    count++;
}

function getType(e){
    console.log(e.type);
}