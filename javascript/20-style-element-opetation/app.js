console.log("Style");
const todo = document.querySelectorAll(".list-group-item")[0];

todo.style.color = "red";
todo.style.backgroundColor = "purple";
todo.style.fontWeight = "bold";
todo.style.paddingTop = "20px";

const cardBody = document.querySelectorAll(".card-body")[1];
console.log(cardBody);

//*Ekleme
const link = document.createElement("a");
link.id = "goToSite";
link.className = "btn btn-dark btn-sm mt-3";
link.href = "#";
link.target = "_blank";
link.innerHTML = "Siteye Git";
cardBody.appendChild(link);
console.log(link);

const todoList = document.querySelector(".list-group");
const todos =  todoList.querySelectorAll(".list-group-item");
console.log("-------------------");
console.log(todos);

//*Silme
todos[1].remove();

//Parent üzerinden silme
todoList.removeChild(todos[2]);//Burası node alır.

//*Eleman değiştirme
const cardBody1 = document.querySelectorAll(".card-body")[1];
const newTitle = document.createElement("h2");
newTitle.className = "card-title";
newTitle.textContent = "Yeni Todo Listesi";
console.log(cardBody1);
cardBody1.replaceChild(newTitle, cardBody1.childNodes[1]);