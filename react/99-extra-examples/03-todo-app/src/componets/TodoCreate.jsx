import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Stack} from "@mui/material";
import "../style/TodoCreate.css"

function TodoCreate() {
    return (
            <div className={"create-todo"}>
                <TextField sx={{width:"300px"}} id="standard-basic" label="Todo Ekle" variant="standard"/>
                <Button variant="contained">Ekle</Button>
            </div>
    )
}

export default TodoCreate
