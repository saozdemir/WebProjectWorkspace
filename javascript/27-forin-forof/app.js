/**
 * * For in - For of Döngüleri
 * * For in : Bir dizideki indexleri almaya yarar.
 * * For of : Bir dizinin elemanlarını almaya yarar.
 */
let names = ["Ahmet", "Emir", "Esra"];

names.forEach((name)=>{
    console.log(name);
});

//* For in Döngüsü : indexleri yazdırır.
for(let index in names){
    console.log(index);
    //console.log(index, names[index]);//? Çift taraflı kullanım
}

//* For of Döngüsü : elemanları yazdırır.
for(let name of names){
    console.log(name);
    //console.log(name, names.indexOf(name));//? Çift taraflı kullanım
}