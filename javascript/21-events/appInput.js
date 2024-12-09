/**
 * INPUT EVENTLARI
 * focus    : inputa girilince
 * blur     : inputtan çıkınca
 * copy     : input içindeki değer kopyalanırsa event oluşturur.
 * paste    : input içine yapıştır yapılırsa evetn oluşur
 * cut      : input içinden kes yapılırsa evetn oluşur
 * select   : input içindeki select event i tetiklenir.
 */

const todo = document.querySelector("#todoName");
todo.addEventListener("focus", run);
todo.addEventListener("blur", run);
todo.addEventListener("copy", run);
todo.addEventListener("paste", run);
todo.addEventListener("cut", run);
todo.addEventListener("select", run);


function run(e) {
    console.log(e.type);
}