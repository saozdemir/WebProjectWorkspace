import React, {useEffect} from 'react'
import Todo from "./Todo.jsx";
import "../assets/main.css"
import {getAllTodos} from "../redux/todoSlice.jsx"
import {useDispatch, useSelector} from "react-redux";

function TodoList() {
    //! Metot çağırmak için kullanılır
    const dispatch = useDispatch();

    //! Store'da tutulan state'i almak için kullanılır. Bu
    const {todos} = useSelector(store => store.todo);
    console.log(todos)

    useEffect(() => {
        dispatch(getAllTodos())

    }, []);

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
