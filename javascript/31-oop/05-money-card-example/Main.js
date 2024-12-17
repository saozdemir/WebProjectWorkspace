import { Consumer } from "./Consumer.js";
let message = 
`
Hoşgeldiniz.
Kartınız var mı?
1- Evet
2- Hayır 
`
const products = [
    {
        productName : "Süt",
        price : 35
    },
    {
        productName : "Et",
        price : 300
    },
    {
        productName : "Bebek Bezi",
        price : 500
    }
]

let result = confirm(message);
let totalPrice
if(result){
    let firstName = prompt("Adınız: ");
    let lastName = prompt("Soyadınız: ");

    const consumer = new Consumer(firstName, lastName, result, products);
    totalPrice = consumer.calculatePrice();
    alert(`Müşteri Bilgileri : ${firstName} ${lastName}
        Ödenecek Tutar: ${totalPrice}`)
} else{
    const consumer = new Consumer(null, null, result, products);
    totalPrice = consumer.calculatePrice();
    alert(`Ödenecek Tutar: ${totalPrice}`);
}

