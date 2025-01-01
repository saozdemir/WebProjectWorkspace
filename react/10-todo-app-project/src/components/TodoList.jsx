import React from 'react';
import Todo from "./Todo.jsx";
import "../style/Todo.css";

function TodoList() {
    return (
        <div className={"todo-list-wrapper"}>
            <Todo></Todo>
        </div>
    );
}

export default TodoList;