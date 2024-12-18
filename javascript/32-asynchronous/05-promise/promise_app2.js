function getUsers(url){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", ()=>{
            try {
                if(xhr.readyState === 4 && xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                }
            } catch (error) {
                reject(error);
            }
        });
        xhr.open("GET", url);
        xhr.send();
    });
}


function getCommentsById(url){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", ()=>{
            try {
                if(xhr.readyState === 4 && xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                }
            } catch (error) {
                reject(error);
            }
        });
        xhr.open("GET", url);
        xhr.send();
    });
}

let userId=3;
/**
 * 1- İlk then ile id si 3 olan kullanıcıyı aldık.
 * 2- Bu then ile alınan sonucu return getCommentsById(..) ile tekrar bir promise içine gönderdik.
 * 3- İkinci bir then ile commetleri aldık.
 */
getUsers(`https://jsonplaceholder.typicode.com/users/${userId}`)
.then((data)=>{//? User bilgilerini aldık.
    console.log(data);
    return getCommentsById(`https://jsonplaceholder.typicode.com/comments/${data.id}`)
})
.then((response)=>{//? User'a ait post bilgilerini aldık.
    console.log(response);
})
.catch((error)=>{
    console.error(error);
})
.finally(()=>{
    console.log("Finally scope");
});