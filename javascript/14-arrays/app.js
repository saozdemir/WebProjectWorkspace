/**
 * ? Dizi Metotları
 * push     : dizinin sonuna eleman ekler ve elemanı döner.
 * unshift  : dizinin başına eleman ekler ve length döner.
 * 
 * pop      : dizinin sonundan eleman siler ve elemanı döner.
 * shift    : dizinin başından eleman siler ve length döner.
 * 
 * splice(index, count)   : başlangıç indexinden kaç eleman silineceği girilir.
 * 
 * toString : diziyi stringe çevirir.
 * join     : diziyi stringe çevirir. Araya eleman eklenebilir.
 * 
 * concat   : dizi birleştirmek için kullanılır.
 * slice(dilimleme) : diziyi istenen yerden bölüp yeni dizi oluşturur.
 * length   : dizi uzunluğunu verir.
 * reverse  : dizinin elemanlarını terse çevirir.
 * split(bölmek)    : belirli ifadeyi bölrek diziye çevirir.
 * indexOf  : elemanın index numarasını verir.
 * includes : dizi verilen elemanı içeriyr mu?
 */

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers[6]);

let names = ["Ahmet", "Emir", "Esra"];
console.log(names[1]);

//? JavaScript'e özel karışık dizi tanımlama
let complex = [0, 1, "Str", 'A'];
console.log(complex[3]);

//* Dizi tanımlama
let array1 = [];
let array2 = new Array();

//* Nesne oluşturma ve nesne dizileri
let personnel1 = {
    name: "Ahmet",
    surname: "Özdemir",
    age: 33
};
let personnel2 = {
    name: "Emir",
    surname: "Özdemir",
    age: 1
};

let personnelList = [personnel1, personnel2];
console.log(personnelList);

//? FOREACH
personnelList.forEach(function (personnel) {
    console.log(personnel);
});


let cars = ["bmw", "toyota", "honda", "volkswagen"];
console.log(cars);
//Dizinin başına ekleme
cars.splice(0, 0, "hundai");
console.log(cars);
//Dizinin 2. indexindeki eemandan sonra 1 eleman sil
cars.splice(2, 1);
console.log(cars);