import {useState} from 'react'
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";

function App() {
  //? Kayıtların tutulacağı bir state tanımlandı.
  const [todos, setTodos] = useState([]);

  //? Yeni kayıt oluşturacak fonksiyon tanımandı.
  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);//! Eski todolar zerine yenisini ekle
  }

  const removeTodo = (todoId) => {
    const extractedArray = todos.filter((todo) => todo.id !== todoId);//! Koşulu sağlayanları getir. Koşulu sağlamaanları sil.
    setTodos([...extractedArray]);
    console.log(extractedArray)
  }

  const updateTodo = (newTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== newTodo.id) {//! Eğer değişlik yapılan ile listede bulunan aynı ise güncelleneni dön.
        return todo;
      }
      return newTodo;
    })
    setTodos([...updatedTodos]);
  }
  console.log(todos);

  return (<div className={"app"}>
    <div className={"main"}>
      {/*! Child component den parent'a props gönderme yapıldı. Yani child component üzerinde, parent componentindeki fonksiyon kullanılabilir hale getirildi.*/}
      <TodoCreate onCreateTodo={createTodo}></TodoCreate>
      <TodoList todos={todos} onRemoveTodo={removeTodo} onUpdateTodo={updateTodo}></TodoList>
      {/* Todo componentinde onClick yapıldığında çalışacak olan fonksiyonu önce TodoList'e props olarak geçtik. Buradan da Todo componentine props olarak geçtik.   */}
    </div>
  </div>)
}

export default App
