/**
 * * Template Literals
 */

//* Template Literals ile kullanımı (ALT GR + ;(iki kez) => ``)
function write(name, surname){
    //     console.log("İsim: " + name + " " + "Soyisim: " + surname);//? Eski kullanım
    console.log(`İsim: ${name} Soyisim: ${surname}`);

    //? Enter gibi karakterkeri de algılayarak yazar.
    console.log(`
        İsim: ${name} 
        Soyisim: ${surname}
        `);
}
write("Ahmet", "Özdemir");

//* Gerçek prohjede kullanımı
function getUserById(id){
    //fetch("https://localhost:8080/users/"+id); //! Bu kullanım fazla parametre geldiği durumlarda destek vermez

    //*fetch(`https://localhost:8080/users/${id}`);
    console.log(`https://localhost:8080/users/${id}`);
}
//? Dinamik olarak çalışır hale geldi.
getUserById(8);
getUserById(10);