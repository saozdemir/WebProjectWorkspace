let product1 = {
    name: "LENOVO V14",
    category: "Computer",
    price: 15000
};
let product2 = {
    name: "CASPER VIA",
    category: "Computer",
    price: 17000
};
let product3 = {
    name: "MONSTER TULPAR",
    category: "Computer",
    price: 19000
};
let product4 = {
    name: "ACER A9",
    category: "Computer",
    price: 12000
};
let product5 = {
    name: "SAMSUNG S12",
    category: "Computer",
    price: 18000
};

let products = [product1, product2, product3, product4, product5];

let search = prompt("Ürün Adı Giriniz: ");
let filtredProduct = [];

products.forEach(function(product){
    if(product.name.toUpperCase().includes(search.toLocaleUpperCase(), 0)){
        filtredProduct.push(product);
    }
});

console.log(products);
console.log(filtredProduct);