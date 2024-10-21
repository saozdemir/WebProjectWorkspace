/**
 * Vücut Kitle Endeksi = kg/m^2
 * 
 * 18,5 altı için ideal kilonun altında
 * 18,5-24,9 ideal
 * 25-29,9 ideal üstü
 * 30-39,9 obez
 * 40 üstü morbit obez
 */
let mass = Number(prompt("Kilonuzu giriniz (kg):"));
let height = Number(prompt("Boyunuzu giriniz (m): "));

let index = mass/(height**2);
console.log("Endeks : " + index);

if(index < 18.5){
    console.log("İdeal Altı");
} else if (index >= 18.5 && index <= 24.9){
    console.log("İdeal");
} else if (index >= 25 && index <= 29.9) {
    console.log("İdeal Üstü");
} else if (index >= 30 && index <=39.9) {
    console.log("Obez");
} else if (index >= 40) {
    console.log("Morbit Obez");
}

