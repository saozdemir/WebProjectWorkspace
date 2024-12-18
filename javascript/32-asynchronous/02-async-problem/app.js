/**
 * *Asenkron Problemi
 * 
 * Fake Rest API
 * https://jsonplaceholder.typicode.com/
 */

// http isteği ile alınmış gibi...
const users = [
    {
        userId: 5,
        post :"Ahmet post 1"
    },
    {
        userId: 5,
        post :"Ahmet post 2"
    },
    {
        userId: 5,
        post :"Ahmet post 3"
    },
    {
        userId: 6,
        post :"Emir post 1"
    },
    {
        userId: 6,
        post :"Emir post 2"
    },
    {
        userId: 7,
        post :"Esra post 1"
    }
];

//? Http isteği atmış gibi simule edildi.
function getUserId(callback){
    setTimeout(()=>{
        //? Servise gidildi ve 1 sn gecikme ile cevap alındı.
        let userId = 5;
        callback(userId);
        return userId;
    }, 1000);
}

function getPostByUserId(userId){
    setTimeout(()=>{
        //? Servise gidildi ve 500 ms gecikme ile cevap alındı.
        users.forEach((user)=>{
            if(user.userId === userId){
                console.log(user.post);
            }
        });
    }, 500);
}

//! Aşağıdaki iki ifade de Asenkron olarak çalıştığı için hiç bir sonuç alamadık.
let userId = getUserId();// Async
getPostByUserId(userId);// Async


//? Senkron yapıldı (callback)
getUserId(getPostByUserId);