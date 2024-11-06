//? Metotlar

//* Parametresiz ve değer döndürmeyen
function print(){
    console.log("Ahmet");
}

print();

//* Parametreli değer döndürmeyen metot.
function printName(name , surname){
    console.log(name + " " + surname);
}

printName("Ahmet", "Özdemir");


let number = Number(prompt("Sayı:"));
let result = cube(number);
console.log(result);
alert("Sayının Kübü: " + result);
//* Parametreli değer döndüren metot.
function cube(number){
    let cube = number*number*number;
    return cube;
}
