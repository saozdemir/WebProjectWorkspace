/**
 * * OOP Uygulaması
 */
class Human{
    /**
     * 1- Özellikler
     * 2- Kurucu Metot
     * 3- Fonksiyonlar
     */
    #operator = "Private Operator";//! private tanımı
    constructor(name, surname, age, salary){
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.salary = salary;
    }

    showInformation(){
        console.log(`
            İsim: ${this.name} 
            Soyisim: ${this.surname} 
            Yaş: ${this.age} 
            Maaş: ${this.salary}`);
    }

    //? getter
    getOperator(){
        return this.#operator;
    }
}

const human = new Human("Ahmet", "Özdemir", 33, 5000);
console.log(human);
console.log(human.name);
human.showInformation();
console.log(human.getOperator());
