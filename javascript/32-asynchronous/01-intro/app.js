/**
 * * Asenkron Programlama
 * ! JavaScript Senkron çalışan programlama dilidir.
 * 
 * ? JavaScript'in Asenkron Çalıştığı Durumlar
 * * 1- Timing işlemlerinde
 * * 2- Event(Olay) lar
 * * 3- Http isteklerinde //!(En sık kullanılan)
 * *    -> XmlHttpRequest
 * *    -> Fetch Api
 * *    -> Axios (React İçin)
 * 
 * 
 * 
 * ? Asenkron Yapıları Senkrona Çevirip Yönetmeye Yarayan Teknolojiler
 * * Callback (ES6 ve öncesi) //? callback hell
 * * Promise (ES6 2015) //? prmomise chain
 * * Async Await (ES7 ile geldi)
 */

//* Senkron : sıra ile çalışan iş parçacıkları 
hello("Seyit");
console.log(1);
console.log(2);

function hello(param){
    console.log(`Hello ${param}`);
}
hello("Ahmet");



//* Asenkron: 
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