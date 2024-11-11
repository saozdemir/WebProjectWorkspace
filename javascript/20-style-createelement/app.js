console.log("Style");
const todo = document.querySelectorAll(".list-group-item")[0];

todo.style.color = "red";
todo.style.backgroundColor = "purple";
todo.style.fontWeight = "bold";
todo.style.paddingTop = "20px";

const cardBody = document.querySelectorAll(".card-body")[1];
console.log(cardBody);
const link = document.createElement("a");
link.id = "goToSite";
link.className = "btn btn-dark btn-sm mt-3";
link.href = "#";
link.target = "_blank";
link.innerHTML = "Siteye Git";
cardBody.appendChild(link);
console.log(link);