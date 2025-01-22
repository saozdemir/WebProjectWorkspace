import React from 'react'
import "../style/Todo.css"
import {IoIosRemoveCircle} from "react-icons/io";
import {FaEdit} from "react-icons/fa";
import {FaCheck} from "react-icons/fa";

function Todo() {
    return (
        <div className={"todo-wrapper"}>
            <div>
                <input className={"todo-input"} type="text"/>
            </div>
            <div className={"todo-icons"}>
                <IoIosRemoveCircle/>
                <FaCheck/>
                <FaEdit/>
            </div>
        </div>
    )
}

export default Todo
