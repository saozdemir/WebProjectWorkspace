/**
 * * Asenkron Programlama
 * ! JavaScript Senkron çalışan programlama dilidir.
 * 
 * ? JavaScript'in Asenkron Çalıştığı Durumlar
 * * 1- Timing işlemlerinde
 * * 2- Event(Olay) lar
 * * 3- Http isteklerinde //!(En sık kullanılan)
 * 
 * 
 * 
 * ? Asenkron Yapıları Senkrona Çevirip Yönetmeye Yarayan Teknolojiler
 * * Callback
 * * Promise
 * * Async Await 
 */

//* Senkron 
hello("Seyit");
console.log(1);
console.log(2);

function hello(param){
    console.log(`Hello ${param}`);
}
hello("Ahmet");



//* Asenkron
setTimeout(()=>{
    console.log("1000 ms Timeout çalıştı");
}, 1000);
setTimeout(()=>{
    console.log("500 ms Timeout çalıştı");
}, 500);
setTimeout(()=>{
    console.log("750 ms Timeout çalıştı");
}, 750);

//? Aşağıdaki satır setTimeout dan önce çalışaacak.
console.log("Asenkron scope u dışında");