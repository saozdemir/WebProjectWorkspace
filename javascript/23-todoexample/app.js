/**
 * Tüm elemanları seçme
 */
const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clearButton");
const filterInput = document.querySelector("#todoSearch");
let todos = [];

runEvents();

function runEvents(){
    form.addEventListener("submit", addTodo);//Butona basıldığında submit eventi için addTodo metodunu çalıştır.
    document.addEventListener("DOMContentLoaded", pageLoaded);
    secondCardBody.addEventListener("click", removeTodoToUI);
    clearButton.addEventListener("click", removeAllTodos);
    filterInput.addEventListener("keyup", filter);
}

/** Girilen todoyu arama */
function filter(e){
    const filterValue = e.target.value.toLowerCase().trim();
    const todoList = document.querySelectorAll(".list-group-item");

    if(todoList.length > 0) {
        todoList.forEach(function(todo){
            if(todo.textContent.toLowerCase().trim().includes(filterValue)) {
                todo.setAttribute("style", "display : block");
            } else {
                todo.setAttribute("style", "display : none !important"); 
                //! Normalde burada display : none çalışmaz bootstrapt sınıflarından dolayı
                //! Eğer bootsrapt yerine bizim yazdığımız kod çalışacaksa <- !important -> eklenerek sorun çözülür.
            }
        });
    } else {
        showAlert("warning", "Todo listesi boş.")
    }
}

/** Todo listesini temizleme */
function removeAllTodos(){
    const todoList = document.querySelectorAll(".list-group-item");
    if(todoList.length > 0){
        todoList.forEach(function(todo){
            todo.remove();
//            removeTodoToStorage(todo.textContent);
            todos = [];
            localStorage.setItem("todos", JSON.stringify(todos));
        });
    } else {
        showAlert("warning", "Todo listesi boş.")
    }
}

/** Todo'da X ya tıklanınca Todo'yu siler. */
function removeTodoToUI(e){
    //Click event'ı nerede çalıştı? Buna göre işleme al.
    if(e.target.className === "fa fa-remove"){
        // Ekrandan silme
        // 2 Üst elementine çıktık.
        const todo = e.target.parentElement.parentElement;
        todo.remove();

        // Storage dan silme
        removeTodoToStorage(todo.textContent);
        showAlert("success", "Todo başarıyla silindi.");
    }
}

/** Todo yu storage dan siler. */
function removeTodoToStorage(removeTodo){
    checkTodosFromStorage();
    // İndex değeri de lazımsa forEach bu şekilde kullanılır.
    todos.forEach(function(todo, index){
        if(removeTodo === todo){
            todos.splice(index, 1);// index'ten başla 1 eleman sil
        }
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}

/** Sayfa ilk yüklendiğinde storage daki değerleri getir. */
function pageLoaded(){
    checkTodosFromStorage();
    todos.forEach(function(todo){
        console.log(todo);
        addTodoToUI(todo);// Her Todo yu arayüze ekle
    });
}

/** Sayfaya yeni Todo ekler. */
function addTodo(e){
    const inputText = addInput.value.trim();
    if(inputText == null || inputText == ""){
        showAlert("warning", "Lütfen todo giriniz!");
    } else {
        //Arayüze ekle
        addTodoToUI(inputText);
        //Storage ekle
        addTodoToStorage(inputText);
        showAlert("success","Todo Eklendi.")
    }
    //storage
    e.preventDefault();//Farklı sayfaya gitmesini engelle
}

/**Arayüz için teni eleman oluşturuyor. */
function addTodoToUI(newTodo){
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.textContent = newTodo;

    const a = document.createElement("a");
    a.href = "#";
    a.className = "delete-item";

    const i = document.createElement("i");
    i.className = "fa fa-remove";

    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);

    addInput.value = "";
}

/** Todo yu storage a kaydeder. */
function addTodoToStorage(newTodo) {
    checkTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

/** Storage dan todo ları al. */
function checkTodosFromStorage() {
    if(localStorage.getItem("todos") === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}

/** Todo lar ile ilgili uyarı ver ve 2.5 sn sonra uyarıyı kaldır. */
function showAlert(type, message){
    const div = document.createElement("div");
    //div.className = "alert alert-"+type;
    //*Template Literals 
    div.className = `alert alert-${type}`;
    div.textContent = message;

    firstCardBody.appendChild(div);

    //? Belli süre sonra kapanmasını sağlamak için
    setTimeout(function() {
        div.remove();
    }, 2500);
}