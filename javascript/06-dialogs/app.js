/**
 * ? Diyalog Kutuları
 * - Alert      : Uyarı window nesnesi içinde bulunan fonksiyon
 * - Prompt     : Kullanıcıdan değer alma window nesnesi içinde bulunan fonksiyon
 * - Confirm    :
 * 
 */

console.log(window);

//* Alert
window.alert("Uyarı Başlığı");

//* Prompt
//! Kullanıcıdan alınan değerler string türündedir.
let value = window.prompt("Kullanıcı Girişi: ");
console.log("Kullanıcı: " + value);

//* Confirm
let confirm = window.confirm("Bu alanı onaylıyor musunuz?");
console.log("Kullanıcı onayı: " + confirm)
