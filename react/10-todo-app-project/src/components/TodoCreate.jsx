import React from 'react';
import "../style/Todo.css";

function TodoCreate() {
    return (
        <div className={"todo-create"}>
            <input type="text" className={"todo-input"} placeholder={"Todo giriniz"}/>
            <button className={"todo-create-button"}>Todo Oluştur</button>
        </div>
    );
}

export default TodoCreate;