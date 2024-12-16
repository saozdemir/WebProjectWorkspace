function add(a, b, c, d){
    console.log(a+b+c+d);
}

add(10,20,30,40);

let numbers = [10, 20, 30, 40];

//* Yeni Yöntem
add(...numbers); // ==> add(numbers[0], numbers[1], numbers[2], numbers[3]) ile aynıdır.

const languages1 = ["Java", "C#"];
// const languages2 = ["JavaScript", "Python", languages1[0], languages1[1]];
//? Yukarıdaki yapı yerine aşağıdaki kullanılabilir.
const languages2 = ["JavaScript", "Python", ...languages1];

console.log(languages2);

//* Kalanları başka bir diziye aktarırken
const grades = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let [a, b, ...remains] = grades;

console.log(a, b, remains);

//? Dizi kopyalarken kullanılır.
const array1 = ["Ahmet", "Emir", "Esra"];
const array2 = [...array1];//Elemanları birebir kopyalar.
console.log(array2);