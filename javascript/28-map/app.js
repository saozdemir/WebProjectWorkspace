/***
 * * Map Kullanımı
 * * const map = new Map();
 * * map.set("key", "value");
 * * map.get("key");
 * * map.size
 */

//* Map oluşturma
const map = new Map();

//* Set: değer atama tür farketmeden tanımlama yapılır.
map.set(1, "Ahmet");
map.set(2, "Emir");
map.set(3, "Esra");

//* Get: değer alma
console.log(map.get(2));
console.log(map.get(3));

//* Size: boyut
console.log(map.size);

//* Delete: değer silme
map.delete(1);//boolean döndürür.
console.log(map);

//* Has: değer var mı?
console.log(map.has(2));// boolean döner
console.log(map.has(1));// boolean döner

//* For of ile map de dönme
for(let [key, value] of map){//? destructing kullanıldı.
    console.log(key, value);
}

//* For each ile map dönme
console.log("----------------");
const keys = Array.from(map.keys()); //! Key leri for each ile dizi olmadan dönemeyiz diziye dönüşürdük.
keys.forEach((key=>{
    console.log(key, map.get(key));
}));

//* Sadece keyleri alma
console.log("----------------");
for(let key of map.keys()){
    console.log(key);
}

//* Sadece value ları alma
console.log("----------------");
for(let value of map.values()){
    console.log(value);
}

//? Map den Array e çevirme => Array.from(map)
console.log("----------------");
console.log(map);
const array = Array.from(map);
console.log(array);

//? Array den Map e çevirme => new Map(array)
console.log("----------------");
const cities = [[34, "İstanbul"], [43, "Kütahya"], [16, "Bursa"]];
console.log(cities);
const citiesMap = new Map(cities);
console.log(citiesMap);