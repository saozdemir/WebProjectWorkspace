/*
 * Api Key: fca_live_hV6yrjrP3MB1clt3viqAOxMucHSZ0CIaT039Zh3V
 * 
 * GET ile istek atarken 
 * https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_hV6yrjrP3MB1clt3viqAOxMucHSZ0CIaT039Zh3V&base_currency=EUR
 * İlk değişken "?"" dem sonra yazılır.
 * Sonra gelen her değişken için "&"" eklenir.
*/

class Currency{
    constructor(){
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_hV6yrjrP3MB1clt3viqAOxMucHSZ0CIaT039Zh3V&base_currency=";
    }

    async exchange(amount, firstCurrency, secondCurrency){
        const response = await fetch(`${this.url}${firstCurrency}`);
        const result = await response.json();
        const exchangedResult = amount * result.data[secondCurrency];
        return exchangedResult;//! Bir fonk. ascyn ile işaretlenirse "Promise" döner!!!!
    }
}
export {Currency};