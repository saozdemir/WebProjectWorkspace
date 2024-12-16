class Calculator{
    //! Bir function ya da özellik static ise CLASS'a özgüdür. Yani değiştirildiğinde tüm kullanıcıları etkiler.
    //! static Değil ise nesneye özgüdür.

    static pi = 3.14;

    static add(num1, num2){
        console.log(num1+num2);
    }

    static sum(num1, num2){
        console.log(num1-num2);
    }

    static mul(num1, num2){
        console.log(num1*num2);
    }

    static div(num1, num2){
        console.log(num1/num2);
    }

    getPi(){
        console.log(this.pi);
    }
}

//! Static ifadelere nesne üzerinden erişilmez. Sınıf ismi üzerinden erişilir.
// const calculator = new Calculator();
// calculator.add(10,5);

Calculator.add(10,7);

const calculator = new Calculator();
calculator.getPi();//! Static olduğu için nesne üzerinden erişilmez!

console.log(Calculator.pi);

