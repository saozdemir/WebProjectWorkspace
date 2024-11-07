/**
 * ? LOOPS
 * 
*/

//* For Loop
for(let i=0; i<10;i++){
    console.log("For loop " + i)
}

//* While Loop
let counter = 0;
while(counter < 10) {
    console.log("While loop " + counter);
    counter++;
}

//* Do While
let condition = 0;
do {
    console.log("Do while loop " + condition)
    condition++;
} while (condition < 10);

//* For Each
//* Nesne oluşturma ve nesne dizileri
let personnel1 = {
    name: "Ahmet",
    surname: "Özdemir",
    age: 33
};
let personnel2 = {
    name: "Emir",
    surname: "Özdemir",
    age: 1
};

let personnelList = [personnel1, personnel2];
console.log(personnelList);

//? FOREACH
personnelList.forEach(function (personnel) {
    console.log(personnel);
});
