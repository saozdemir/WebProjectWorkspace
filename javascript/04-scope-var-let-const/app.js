
// *Global Scope
var number = 10;
console.log(number);

if(number == 10) {
    console.log(true);
}

function scopeMethod (){
    //*Function Scope
    var numberFunction = 100;
    console.log("Number Global: " + number);
    console.log("Number Function: " + numberFunction);
    return number;
}

function blockScope(){
    if(true){
        //*Block Scope
        var blockNumber = 5;
        console.log("Number Block: " + blockNumber);
    } else {

    }
}

scopeMethod();
blockScope();


//? Var - Let - Const
//! Tipe göre değişken yok
var num1 = 10; //* var ile tanımlanan her şey Function Scope olur.
let num2 = 20;//* let Block Scope özelliğine sahiptir. Aynı isim ile tek tanımlamaya izin verir.
const num3 = 30;//* const Block Scope özelliğine sahiptir. Sabit tanımlamada kullanılır.


function sayHi(){
    var sayHi = "Herkese selam!"; //function scope
    console.log(sayHi);
    if(true){
        var var1 = 99;//function scope
        let var2 = 88;//block scope sadece if blogunda kullanılır.
        const var3 = 77;//block scope sadece if blogunda kullanılır.
    }
    console.log(var1);// var
}

sayHi();

const user = { 
    userName: "Ahmet",
    passwort: "1234"
}

//! const user = {} nesne değiştirilemez
user.userName = "Emir"; // nesnenin içindeki attribute değiştirilebilir.

console.log(user);



