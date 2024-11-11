//? Math Metotları
/**
 * 1- Floor : Virgülden sonrasını kaldırır. 3.65 = 3 gibi
 * 2- Ceil  : Bir üste yuvarlar. 3.65 = 4, 3.01 = 4 gibi
 * 3- Round : En yakın yere yuvarlar. 3.15 = 3, 3.55 = 4 gibi
 * 
 * 4- Max
 * 5- Min
 * 
 * 6- Random: Rastgele değer
 * 7- Abs   : Mutlak Değer
 * 8- Sqrt  : Karekök almak
 * 9- Pow   : Üs almak
 * 
 */

let number = 3.65;

console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));

let numbers = [10, -2, 5, 21];
console.log(Math.max(10, -2, 5, 21));
console.log(Math.min(10, -2, 5, 21));

let negative = -12;
console.log(Math.abs(negative));