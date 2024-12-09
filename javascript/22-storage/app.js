/**
 * ? STORAGE
 * * Local    : Bilgisayar ya da tarayıcı kapatılınca silinmez.
 * * Session  : Bilgisayar ya da tarayıcı kapanınca silinir.
 * İkisi de window nesnesi içinde bulubur.
 * Tüm kayıtlar string olarak tutulur.
 * Array olarak kaydetme yükleme işlemleri için 
 *  JSON.stringify(...) : Array olarak kaydeder.
 *  JSON.parse(...)     : Array olarak alır.
 */

/**
 * *Session Storage
 */
// Değer ekleme
sessionStorage.setItem("430", "Ahmet");
sessionStorage.setItem("431", "Emir");

// Değer silme
sessionStorage.removeItem("430");

// Değer alma
let value = sessionStorage.getItem("431");
console.log(value);

// Tüm değerleri silme
sessionStorage.clear();

// Session storage array

let names = ["Ahmet", "Emir", "Esra"];

// sessionStorage.setItem("names", names);

//? Array olarak kaydetme
sessionStorage.setItem("names", JSON.stringify(names));
let item = JSON.parse(sessionStorage.getItem("names"));
item.forEach(function (item) {
    console.log(item);
})

console.log(item);
console.log(typeof item);


/**
 * *Local Storage
 */
// Değer ekleme
localStorage.setItem("1", "Emir");
localStorage.setItem("2", "Ahmet");

// Değer alma
let localValue = localStorage.getItem("1");
console.log("Local value " + localValue);

// Değer silme
localStorage.removeItem("2");

// Tüm değerleri silme
localStorage.clear();

//? Array olarak kaydetme
let localNames = ["Ahmet", "Emir", "Esra"];
localStorage.setItem("localNames", JSON.stringify(localNames));
let localValueArray =JSON.parse(localStorage.getItem("localNames"));
console.log(localValueArray);
