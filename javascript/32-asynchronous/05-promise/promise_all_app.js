/**
 * Promise.all() metodu dizi olarka verilen btün promise sonularını bekler.
 * 1- Sonuçlarını hepsi resolve ise .then() içine girer.
 * 2- Sonuçlarıdan biri bile reject ise .catch() içine girer.
 * 3- Sonuçları bir array olarak döndürür.
 */

const p1 = Promise.resolve("1. Promise başarılı.");
const p2 = Promise.resolve("2. Promise başarılı.");
const p3 = new Promise((resolve, reject)=>{resolve("3. Promise başarılı.")});
const p4 = Promise.reject("4. Promise hatalı.");

//* 3 Promise de array olarak verildi.
//? Tüm promise ler resolve ise .then() içine girdi.
//! Promiselerden biri bile reject ise .catch() içine girdi.
Promise.all([p1, p2, p3,p4])
    .then((response)=>{
        for(let val of response){
            console.log(val);
        }
    })
    .catch((error)=>{
        console.log(error);
    })