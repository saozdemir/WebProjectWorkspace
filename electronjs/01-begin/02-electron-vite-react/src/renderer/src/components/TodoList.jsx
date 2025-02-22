import React from 'react';
import Todo from "./Todo.jsx";
import "../assets/Todo.css";


function TodoList({todos, onRemoveTodo, onUpdateTodo}) {
    return (
        <div className={"todo-list-wrapper"}>
            {
                todos && todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} onUpdateTodo={onUpdateTodo}></Todo>
                ))
            }
        </div>
    );
}

export default TodoList;
