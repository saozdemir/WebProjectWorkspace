/**
 * Break    : Koşul sağlandığında döngüden çıkmak için kullanılır. 
 * Continue : Koşul sağlandığında sadece koşul için döngü kırılır.
 */
// Break
let counter1 = 0;
while (counter1 < 10) {
    console.log("Sayaç : " + counter1);
    if (counter1 == 7) {
        break;
    }
    counter1++;
}

// Continue
let counter2 = 0;
while (counter2 < 10) {
    counter2++;
    if (counter2 == 7) {
        continue;
    }
    console.log("Sayaç : " + counter2);
}