import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    todos: [],
}

export const getAllTodos = createAsyncThunk("todos", async ()=>{
    debugger
    const response = await axios.get("http://localhost:8080/rest/api/todo-app/list");
    console.log(response.data);
    return response.data;
})

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllTodos.fulfilled, (state, action)=>{
            state.todos=action.payload;
            console.log(todos);
        })
    }
})

export const { } = todoSlice.actions

export default todoSlice.reducer