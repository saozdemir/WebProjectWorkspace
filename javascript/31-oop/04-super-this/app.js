/**
 * * Super This kullanımı
 * * this       : Bulunduğumuz sınıfın nesnesi
 * * super      : Parent sınıfın nesnesi
 * * this()     : Bulunduğumuz sınıfın constructor'ı
 * * super()    : Parent sınıfın constructor'ı
 */
class Person{
    constructor(fisrtName, lastName, salary){
        this.fisrtName = fisrtName;
        this.lastName = lastName;
        this.salary = salary;
    }

    writeInfo(){
        console.log(this.fisrtName, this.lastName, this.salary);
    }
    // write() {
    //     console.log(this);//* Bulunduğı class nesnesi
    // }
}

class Student extends Person{
    constructor(fisrtName, lastName, salary){
        //* Parent constructora gitti
        super(fisrtName, lastName, salary);
    }

    writeInfo(){
        super.writeInfo();
    }

    // write(){
    //     super.write();//* Parent nesnesi
    // }
}

class Engineer extends Person{
    constructor(fisrtName, lastName, salary){
        super(fisrtName, lastName, salary);
    }

    writeInfo(){
        super.writeInfo();
    }
}


// const student = new Student("Emir");
// student.write();

const student = new Student("Emir", "Özdemir", 5000);
console.log(student);
student.writeInfo();

const engineer =  new Engineer("Ahmet", "Özdemir", 1000);
console.log(engineer);
engineer.writeInfo();