import React, {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Stack} from "@mui/material";
import "../style/TodoCreate.css"
import {useDispatch} from "react-redux";
import {addTodo} from "../redux/todoSlice.jsx"
import {toast} from "react-toastify";

function TodoCreate() {
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState("");
    const handleAddTodo = () => {
        if (!newTodo) {
            toast.warn("Todo alanı boş");
            return;
        }
        const request = {
            id: 0,
            content: newTodo
        };
        dispatch(addTodo(request));
        toast.success("Todo eklendi");
        setNewTodo("");
    }
    return (
        <div className={"create-todo"}>
            <TextField sx={{width: "70%"}} id="standard-basic" label="Todo Ekle" variant="standard" value={newTodo}
                       onChange={(e) => {
                           setNewTodo(e.target.value)
                       }}/>
            <Button sx={{width: "30px", height: "40px", padding: "5px"}} variant="contained"
                    onClick={handleAddTodo}>Ekle</Button>
        </div>
    )
}

export default TodoCreate
