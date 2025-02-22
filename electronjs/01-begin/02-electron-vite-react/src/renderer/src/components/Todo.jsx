import React, {useState} from 'react';
import {IoIosRemoveCircle} from "react-icons/io";
import {FaEdit} from "react-icons/fa";
import {FaCheck} from "react-icons/fa";
import "../assets/Todo.css";

function Todo({todo, onRemoveTodo, onUpdateTodo}) {
  const {id, content} = todo;//! Object destrcuting
  const [editable, setEditable] = useState(false);
  const [newTodo, setNewTodo] = useState(content);

  const removeTodo = () => {
    onRemoveTodo(id);
  }

  const updateTodo = () => {
    const request = {
      id: id,
      content: newTodo
    };
    onUpdateTodo(request);
    setEditable(false);
  }
  return (<div className={"todo-wrapper"}>
    <div>{
      editable ?
        <input type="text" className={"todo-input todo-input-update "} value={newTodo}
               onChange={(e) => setNewTodo(e.target.value)}/> : content
    }</div>
    <div>
      <IoIosRemoveCircle onClick={removeTodo} className={"todo-icons"}/>
      {editable ? <FaCheck className={"todo-icons"} onClick={updateTodo}/> :
        <FaEdit className={"todo-icons"} onClick={() => setEditable(true)}/>}


    </div>
  </div>);
}

export default Todo;
