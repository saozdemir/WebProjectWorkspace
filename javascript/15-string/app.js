//? String Sınıfı Metotları

/**
 * charAt();        : index numarasına göre karakter döner
 * concat();        : String ifadeleri birleştirir.
 * indexOf();       : verilen karakterin index numarasını döner.
 * lastindexof()    : verilen karakterin index numarasını döner.
 * toUpperCase();   : Büyük harfe çevir.
 * toLowerCase();   : Küçük harfe çevir.
 * trim();          : Boşlukları siler.
 * slice();         : Verilen indexlar arasında stringi parçala.
 * substring();     : Verilen indexlar arasında stringi parçala.
 * replace();       : Yer değiştirme.
 * split();         : Belirlenen ayırıcıya göre stringi diziye böl.
 * valueOf();       : primitive ve referasn tip döndürür.
 * startWith();     : Verilen ifade ile başlıyor mu?
 * endWith();       : Verilen ifade ile bitiyor mu?
 * 
 */

let course = "Web Geliştirme Kursu";
console.log(course);
console.log(course.charAt(2));

let date = "2024";
let concat = course.concat(" ", date);
console.log(concat);

let slice = course.slice(2, 7);
console.log(slice);

let substring = course.substring(2, 7);
console.log(substring);

console.log(course.replace("Web", "WEB"))
