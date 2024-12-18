/**
 * * PROMISE
 * * Asenkron yapıları senkron yapmak için kullanılır.
 * * Callback lerin daha gelişmiş versiyonudur.
 *? Promise Stateleri
 *  1- pending (bekleme)
 *  2- fullfilled (işlem başarılı)
 *      .then(resolve) : işlem başarılı ise parametreyi al
 *  3- rejected (işlem reddedildi)
 *      .catch(reject) : işlem başarısız ise parametreyi al
 * 
 */
let check = true;

//* Promise 2 parametre alır. Başarılı için resolve, başarısız için reject metodunu çalıştırır.
const promise1 = new Promise((resolve, reject)=>{
    if(check){
        resolve("Başarılı");
    } else {
        reject("Başarısız")
    }
});

console.log(promise1);



let state = false;
//* Promise ouşturan bir metot.
function createPromise(){
    return new Promise((resolve, reject) => {
        if(state){
            resolve("Promise sıkıntı yok.")
        }else{
            reject("Sıkıntı büyük.")
        }
    });
}

//* Promise den dönen response'u alıp consola yazdırdık.
/**
 * Başarılı için    : .then()
 * Başarısız için   : .catch()
 * Sonuç ne olursa olsun çalışması için : .finally() 
 */
createPromise().then((response)=>{
    console.log(response);
}).catch((error)=>{
    console.error(error);
}).finally(()=>{
    console.warn("Her zaman çalışır.");
});