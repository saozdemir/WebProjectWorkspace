/**
 *? Veri Tipleri
 * 1- String
 * 2- Number
 * 3- Boolean
 * 4- Null
 * 5- Undefined
 * 6- Object
 * 7- Function
 * 
 */


 //* Value Type
 let name = "Ahmet";
 let number = 12.5;
 let condition = true;
 let empty = null;
 let undefine;

 console.log(typeof name); // string
 console.log(typeof number);// number
 console.log(typeof condition);//boolean
 console.log(typeof empty);//null
 console.log(typeof undefine);//undefined

 //* Reference Type
 let human = { // Object
    name: "Ahmet",
    surname: "Özdemir",
    age: 33
 }

 console.log(typeof human);//array(object)
 console.log(human);

 let numbers = [1,2,3,4];//array(object)
 console.log(typeof numbers);
 console.log(numbers);

 let funct = function(){//function
    console.log("Merhaba");
 }

 funct();
 console.log(typeof funct);

/**
 * ? Aritmetik Operatörler
 * = atama
 * + - * / %
 * ++
 * --
 * ** üs alma 5^3 = 5**3
 * 
 *  
 */


/** 
* ? Atama Operatörleri
 * = atama
 * == eşittir (tipten bağımsız)
 * === eşittir (veri tipi ve değerleri karşılaştırır.)
 * +=
 * -=
 * *=
 * /=
 * %=
 * **= üssünü alma 
 * 
 */

console.log(3=="3"); //! true: tipine bakmadan eşit olup olmamasını kontorl eder.
console.log(3==="3"); //! false: tipide kontrol ederek değerlerin eşit olup olmamasını kontorl eder.

let num1 = 4;
num1 = num1 + 2;
num1 += 2;

/**
 * ? Mantıksal Operatörler
 * && : ve
 * || : veya
 * !  : değil
 * 
 * ? Karşılaştırma Operatörleri
 * != :eşit değilse
 * >  : büyükse
 * <  : küçükse
 * >= : büyük eşitse
 * <= : küçük eşitse
 */