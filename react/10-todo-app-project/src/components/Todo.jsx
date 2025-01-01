import React from 'react';
import {IoIosRemoveCircle} from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import "../style/Todo.css";

function Todo() {
    return (
        <div className={"todo-wrapper"}>
            <div>Ben İlk TODO</div>
            <div>
                <IoIosRemoveCircle className={"todo-icons"}/>
                <FaEdit className={"todo-icons"}/>
            </div>
        </div>
    );
}

export default Todo;