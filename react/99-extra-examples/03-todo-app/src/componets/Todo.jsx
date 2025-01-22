import React, {useState} from 'react'
import "../style/Todo.css"
import {IoIosRemoveCircle} from "react-icons/io";
import {FaEdit} from "react-icons/fa";
import {FaCheck} from "react-icons/fa";

function Todo({todo}) {
    const {id, content} = todo;
    const [editable, setEditable] = useState(false);
    const [newTodo, setNewTodo] = useState(content);
    console.log(content);
    return (
        <div className={"todo-wrapper"}>
            <div>
                {editable ? <input className={"todo-input"} type="text" value={newTodo}/> : content}
            </div>
            <div className={"todo-icons"}>
                <IoIosRemoveCircle/>
                {editable ? <FaCheck onClick={()=>setEditable(false)}/>
                    : <FaEdit onClick={() => setEditable(true)}/>}
            </div>
        </div>
    )
}

export default Todo
