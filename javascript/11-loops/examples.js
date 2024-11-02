/**
 * Asal Sayı Bulma
 */
function primeNumber(){
    let number = Number(prompt("Asal Sayı Kontrolü İçin Bir Sayı Giriniz: "));
    let state = true;
    for (let i = 2; i< Math.floor(number/2); i++) {
        if(number%i==0) {
            state = false;
            break;
        }
    }
    if (state){
        alert("Sayı asaldır:  " + number);
    } else {
        alert("Sayı asal değildir:  " + number);
    }
}

/**
 * Faktöriyel Hesaplama
 */
function factorial(){
    let number = Number(prompt("Faktöriyel Hesabı İçin Bir Sayı Giriniz: "));
    let factorial = 1;

    for (let i = 1;i<=number;i++) {
        factorial*=i;
    }
    alert("Faktöriyel: " + factorial);
}


primeNumber();
factorial();
