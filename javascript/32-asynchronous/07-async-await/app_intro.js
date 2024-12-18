/**
 * * Async Await
 * Promise .than() zincirinden kurtaran bir yapıya sahiptir.
 */

//! Fonksiyonun başına async eklenirse  geri dönen tip "Promise" olur.
async function hello(){
    return "Hello world!";
}

//! Promise döndü
console.log(hello());


//? İçeriğe erişmek için .then() kullanıdık.
hello().then((response)=>{
    console.log(response);
});