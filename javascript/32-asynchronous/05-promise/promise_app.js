function readStudents(url){
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        try{
            xhr.addEventListener("readystatechange", ()=>{
                if(xhr.readyState === 4 && xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                }
            });
        }catch(error){
            reject(error);
        }

        xhr.open("GET", url);
        xhr.send();
    });
}

//? Localde bulunan json dosyasından verileri al.
readStudents("students.json")
.then((response) => {
    console.log(response);
})
.catch((error) => {
    console.error("Hata oluştu", error);
});

console.log("---------------------------------------");

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

getUsers("https://jsonplaceholder.typicode.com/users")
.then((data)=>{
    console.log(data);
    data.forEach(user => {
        console.log(user.name);
    });
})
.catch((error)=>{
    console.error(error);
})
.finally(()=>{
    console.log("Finally scope");
});