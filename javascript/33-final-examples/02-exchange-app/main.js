/** 
 * Api Key: fca_live_hV6yrjrP3MB1clt3viqAOxMucHSZ0CIaT039Zh3V
 * 
 * GET ile istek atarken 
 * https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_hV6yrjrP3MB1clt3viqAOxMucHSZ0CIaT039Zh3V&base_currency=EUR
 * İlk değişken "?"" dem sonra yazılır.
 * Sonra gelen her değişken için "&"" eklenir.

*/
import { Currency } from "./currency.js";
const currency = new Currency();
const amountInput = document.querySelector("#amount");
const firstOption = document.querySelector("#firstCurrencyOption");
const secondOption = document.querySelector("#secondCurrencyOption");
const resultInput = document.querySelector("#result");

runEventListeners();

function runEventListeners(){
    amountInput.addEventListener("input", exchange);
    firstOption.addEventListener("change", exchange);
    secondOption.addEventListener("change", exchange);
}

function exchange(){
    const amount = Number(amountInput.value.trim());
    const firstOptionValue = firstOption.options[firstOption.selectedIndex].textContent;
    const secondOptionValue = secondOption.options[secondOption.selectedIndex].textContent;
    currency.exchange(amount, firstOptionValue, secondOptionValue)
    .then((result)=>{
        resultInput.value = result.toFixed(3);
    })
    .catch((error)=>{
        console.error("Api den veri alımında hata!", error);
    });
    //! Kullanılan fonk async olarak işaretlendiği için dönen değer "Promise" dir. bunu .then() ile yakalayarak asıl değeri aldık.
}
