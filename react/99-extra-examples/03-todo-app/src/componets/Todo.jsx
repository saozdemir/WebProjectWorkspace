import React, {useState} from 'react'
import "../style/Todo.css"
import {IoIosRemoveCircle} from "react-icons/io";
import {FaEdit} from "react-icons/fa";
import {FaCheck} from "react-icons/fa";
import {useDispatch} from "react-redux";
import {deleteTodo} from "../redux/todoSlice.jsx"
import {toast} from "react-toastify";

function Todo({todo}) {
    const {id, content} = todo;
    const [editable, setEditable] = useState(false);
    const [newTodo, setNewTodo] = useState(content);
    const dispatch = useDispatch();

    const handleDeleteTodo = (deleteId) => {
        dispatch(deleteTodo(deleteId));
        toast.success("Todo silindi")
    }

    const handleUpdateTodo = () => {

    }
    return (
        <div className={"todo-wrapper"}>
            <div>
                {editable ? <input className={"todo-input"} type="text" value={newTodo} onChange={(e) => {
                    setNewTodo(e.target.value)
                }}/> : content}
            </div>
            <div className={"todo-icons"}>
                <IoIosRemoveCircle className={"todo-remove"} onClick={() => {
                    handleDeleteTodo(id)
                }}/>
                {editable ? <FaCheck className={"todo-save"} onClick={() => setEditable(false)}/>
                    : <FaEdit className={"todo-update"} onClick={() => setEditable(true)}/>}
            </div>
        </div>
    )
}

export default Todo
