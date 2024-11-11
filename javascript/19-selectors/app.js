/**
 * Seçiciler
 * 
 * html etiketler 3 farklı şekilde yakalanır:
 * 1- classname
 * 2- id :getElementById
 * 3- tag name
 * 
 * CSS ile aynı id için # class için .
 * ! querySelector 
 * ! querySelectorAll
 */

console.log("Todo");
//Id Alma
const button = document.getElementById("todoAddButton");
console.log(button.id);
console.log(button.getAttribute("id"));

//Class Name Alma
console.log(button.className);
console.log(button.getAttribute("class"));

//Class Listesi Alma
const classList = button.classList;
console.log(classList);
console.log(classList[3]);

//Class Lisesini tek tek yazdırdı
classList.forEach(function(className){
    console.log(className);
});

//Button Text Yakalama
let buttonText = button.textContent;
let buttonText2 = button.innerHTML; //Html etiketi ile tanımlama ya da almak için
console.log(buttonText);
console.log(buttonText2);

//* button.textContent = "<b>Todo Listesi</b>"// String olarak ne girildiyse onu yazdırır.(Olduğu gibi yazar)

//* button.innerHTML = "<b>Todo Listesi</b>" //Html içeriğine göre arayüze yansıtır.

//? Class Name
const todoList = document.getElementsByClassName("list-group-item");
console.log(todoList);

const todoList2 = Array.from(document.getElementsByClassName("list-group-item"));
todoList2.forEach(function(todo){
    console.log(todo.textContent);
});

//? Tag Name
const forms = document.getElementsByTagName("form");
console.log(forms[0].id); //Form listesinin 0. elemanının idsi

const forms2 = Array.from(document.getElementsByTagName("form"));
forms2.forEach(function(form){
    console.log(form);
});

//! querySelector querySelectorAll = 3 işlemin hepsinin yerine aynı işlemi yapr.

console.log("------------");

//* id ye göre selector
const todoListSelectorId = document.querySelector("#todoAddButton");
console.log(todoListSelectorId);

//* class a göre selector
const todoListSelectorClass = document.querySelector(".list-group");
console.log(todoListSelectorClass);

//classtan birden fazla kullanıldısa ve hepsini seçmek isteniyorsa
// querySelectorAll kullanılır.

const todoListSelectorClassAll = document.querySelectorAll(".list-group-item");
console.log(todoListSelectorClassAll);
