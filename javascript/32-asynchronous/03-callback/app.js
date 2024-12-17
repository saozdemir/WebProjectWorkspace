/**
 * *CALLBACK: Bir fonksiyonu bir fonksiyona parametre geçerek asenkron yapıyı senktona dönüştürür.
 * Senkron yapmak için
 * 1- callback (eski yöntem)
 * 2- promise
 * 3- async await
 */

function getName(callback){//! getName metoduna parametre geçtik.
    setTimeout(()=>{
        //Servisten adı getir.
        let name = "Ahmet";
        // console.log("Ahmet");
        //callback(); //! callback metodu çağrıldı ve sonraki metodun çalışması bundan sonra çalışacak şekilde ayarlandı.
        callback(name);//Parametre alarak bu şekilde 
    },1000);
}

function getSurname(name, callback){//getSurname(name)
    setTimeout(()=>{
        //Servisten soyadı getir.
        let surname = "Özdemir";
        // console.log("Özdemir");
        //console.log(name, surname);
        callback(surname);
    },500);
}

function getAge(name, surname, callback){
    setTimeout(()=>{
        //Servisten soyadı getir.
        let age = 33;
        callback(age);
    },300);
}

// Asenkron yapılar
// getName();
// getSurname();

//Callback
getName(getSurname);//! getSurname metodunu getName içine parametre olarak verdik.

//* Callback Hell
getName((name)=>{
    getSurname(name, (surname)=>{
        getAge(name, surname, (age)=>{
            console.log(name, surname, age);
        });
    });
});
