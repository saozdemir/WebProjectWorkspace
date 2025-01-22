import React, {useEffect} from 'react'
import Todo from "./Todo.jsx";
import "../style/TodoList.css"
import {getAllTodos} from "../redux/todoSlice.jsx"
import {useDispatch, useSelector} from "react-redux";

function TodoList() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTodos())

    }, []);

    return (
        <div className={"todo-list"}>
            <Todo>Todo1</Todo>
            <Todo>Todo2</Todo>
        </div>
    )
}

export default TodoList
