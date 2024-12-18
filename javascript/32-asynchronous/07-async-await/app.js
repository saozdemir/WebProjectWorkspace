
/**
 * * Promise .than() yapısı ile
 */
document.querySelector("#button1").addEventListener("click", ()=>{
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())//! return response.json()
    .then((post)=>{
        console.log(post.id);
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
        .then((response) => response.json())
        .then((comments) => console.log(comments))
    })
});


/**
 * * async await yapısı ile
 * ?    1- Kullanılacak fonksiyonun başına "async" eklenir.
 * ?    2- Asenkron yapının bekleneceği satırın önüne "await" eklenir  
 */
document.querySelector("#button2").addEventListener("click", async()=>{
    const post = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();

    const comments = await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json();
    console.log(post, comments);
});