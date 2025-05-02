import React, {useEffect} from 'react'
import Todo from "./Todo.jsx";
import "../assets/main.css"
import {getAllTodos, updateTodos} from "../redux/todoSlice.jsx"
import {useDispatch, useSelector} from "react-redux";

function TodoList() {
    //! Metot çağırmak için kullanılır
    const dispatch = useDispatch();

    //! Store'da tutulan state'i almak için kullanılır. Bu
    const {todos} = useSelector(store => store.todo);
    console.log(todos)

  useEffect(() => {
    // İlk verileri yükle
    dispatch(getAllTodos());

    // SSE bağlantısını kur
    const eventSource = new EventSource("http://localhost:8080/rest/api/todo-app/event");

    eventSource.addEventListener("todos", (event) => {
      const newTodos = JSON.parse(event.data);
      dispatch(updateTodos(newTodos));
    });

    eventSource.onerror = (error) => {
      console.error("EventSource failed:", error);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, [dispatch]);

    return (
        <div className={"todo-list"}>
            {
                todos && todos.map((todo) => (
                    <Todo key={todo.id} todo={todo}></Todo>
                ))
            }
        </div>
    )
}

export default TodoList
