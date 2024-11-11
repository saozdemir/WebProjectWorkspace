/**
 * *TÜR DÖNÜŞÜMLERİ
 * primitive -> string, number, boolean, undefined, null
 * reference -> function, object, array
 */

let number = "12.5";

console.log("Number: " + Number(number)); // 12.5
console.log("ParseInt: " + parseInt(number)); // 12
console.log("ParseFloat: " + parseFloat(number)); // 12.5

let str = (55).toString();
console.log(typeof str); //String

let numbers = [1, 2, 3, 4];
console.log(numbers + " " +typeof numbers); // 1,2,3,4 object


let numberStr = String(numbers);
console.log(numberStr + " " +typeof numberStr); // 1,2,3,4 string

let array1 = [1, 2, 3, 4];
let array2 = [1, 2, 3, 4];
let array3 = array1;

if(array1 == array2) {
    console.log(true);
} else {
    console.log(false);
}


if(array1 == array3) {
    console.log(true);
} else {
    console.log(false);
}