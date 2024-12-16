let languages = ["C#", "C++", "JavaScript", "Python"];

// let lang1, lang2, lang3, lang4;
// lang1 = languages[0];
// lang2 = languages[1];
// lang3 = languages[2];
// lang4 = languages[3];

//? Yukarıdaki tanımlamalar yerine destructing yapısı ile kısaca tanımlama yapılmaktadır.
[lang1, lang2, lang3, lang4] = languages;


console.log(lang1 + lang2 + lang3 + lang4);


//? Nesne için ise {} parantezi ile tanımlama yapılır.
const person = {
    name : "Ahmet",
    surname : "Özdemir",
    salary : 5000,
    age : 33
}
let {name, surname, salary, age} = person;
console.log(name, surname, salary, age);