/**
 * *KLAVYE EVENTLARI
 * keypress : harf ve sayılarda tetiklenir.
 * keydown  : tüm tuşlar için çalışır (CapsLock, Shift vb.). basılınca çalışır.
 * keyup    : Tuştan elini kaldırdığında çalışır.
 */
// document.addEventListener("keypress", keyLogger);
// document.addEventListener("keydown", run);

// function keyLogger(e){
//     console.log(e.key);
//     console.log(e.keyCode); // asci
//     console.log(e.which); // asci (2. yöntem)
// }

// function run(e){
//     console.log(e.keyCode);
//     if(e.keyCode == 116){
//         alert("Sayfa yenileme engellendi.");
//     }

//     //otomatik key ayarlarını kapatma (F5 tuşuna basıldığında sayfayı yenileme gibi..)
//     e.preventDefault();
// }


const cardTitle = document.querySelectorAll(".card-title")[0];

const inputTodo = document.querySelector("#todoName");

inputTodo.addEventListener("keypress", write);

function write(e){
    console.log(e.target.value);
}