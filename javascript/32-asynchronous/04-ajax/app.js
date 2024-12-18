/**
 * AJAX
 * Sunucuya istek göndermek için kullanılan eski kütüphanedir.
 * 
 *? readyState
 *      0: request not initialized (istek server a gitmemiş)
 *      1: server connection established (server aistek atılmış)
 *      2: request received (istek ulaştı)
 *      3: processing request (istek işleniyor)
 *      4: request finished and response is ready (cevap hazır)
 *?  status	
 *      200: "OK"
 *      403: "Forbidden"
 *      404: "Page not found"
 * 
 */

function prepareURL(url, id){
    if(id === null){
        return url;
    }
    return `${url}?postId=${id}`;
}

function getComments(url, id){
    let newURL = prepareURL(url, id);
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", ()=>{
        if(xhr.readyState ===4 && xhr.status ===200){
            console.log(JSON.parse(xhr.responseText));
        }
    });

    xhr.open("GET", newURL);
    xhr.send();
}

getComments("https://jsonplaceholder.typicode.com/comments", 1);