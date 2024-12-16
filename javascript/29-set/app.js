/**
 * * Set Kullanımı
 * * Tekrar eden değer kullanılmaz.
 */

//* Set oluşturma
const set = new Set();

//* add : ekleme. Her türden değer eklenebilir.
set.add(true);
set.add(3.14);
set.add("Emir");
set.add("Emir");//! ikinci defa eklenmez!!
set.add("Ahmet");
set.add({name: "Ahmet", password: "1"});
console.log(set);

//* Size: boyut
console.log(set.size);

//* Delete: silme
set.delete("Ahmet");
console.log(set.size);

//* Has: değer var mı?
console.log(set.has("Emir")); 
console.log(set.has("Ahmet")); 

//* For of: ile elemanları dönme
console.log("-----------");
for(let value of set){
    console.log(value);
}

//? Set i Array e çevirme
console.log("-----------");
const values = Array.from(set);
values.forEach(value => console.log(value));

//? Array den set oluşturmak
console.log("-----------");
let array = ["Ahmet", "Emir", "Esra"];
const namesSet = new Set(array);
console.log(namesSet);
