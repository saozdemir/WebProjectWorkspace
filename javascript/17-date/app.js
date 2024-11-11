let date = new Date();
console.log(date);
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());
console.log(date.toLocaleString());


let date1 = new Date(date);

date1.setDate(24);
console.log(date);
console.log(date1);

if (date1 > date) {
    console.log(true);
} else {
    console.log(false);
}

