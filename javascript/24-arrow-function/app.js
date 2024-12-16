function print(){
    console.log("Hello");
}
print();

//? Parametresiz arrow function
const printArrow = ()=>{
    console.log("Hello Arrow");
}
printArrow();

//? Parametre alan arrow function
const add = (num1, num2)=>{
    let result;
    result = Number(num1) + Number(num2);
    console.log(result);
}
add(3,5);

//* Tek satır içeren arrow function için {} parantezleri kullanılmayabilir.
const singleLine = ()=> console.log("Single Line");
singleLine();

/**
 * *Tek parametre alan arrow fuctionlar için
 * * (name)=> yerine doğrudan name => şeklinde de yazılabilir.
 */
const singleParameter = name=>console.log(name + " hoşgeldin.");
singleParameter("Ahmet");

//* Return olmadan da aşağıdaki gibi kullanılabilir.
const cube = x=>x*x*x;

console.log("4^3 = " + cube(4));

//? Listener larda kullanımı
document.addEventListener("click", ()=>{
    console.log("Click event trigged");
});

// document.addEventListener("click", clickEvent());
// function clickEvent(){
//     console.log("Click event triggedx");
// }

