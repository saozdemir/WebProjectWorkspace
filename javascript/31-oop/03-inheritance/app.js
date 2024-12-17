/**
 * *Inheritance
 */

class Person{
    firstName = "Ahmet";

    write(){
        console.log("Person class: " + this.firstName);
    }
}

class Student extends Person{
    write(){
        console.log("Student class: " + this.firstName);
    }
}



const person = new Person();
person.write();

//* firstName ve write() metodu miras alındı.
const student = new Student();
student.write();