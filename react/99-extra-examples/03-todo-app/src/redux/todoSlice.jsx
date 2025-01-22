import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    todos: [],
}

export const getAllTodos = createAsyncThunk("todos", async ()=>{
    const response = await axios.get("http://localhost:8080/rest/api/todo-app/list");
    return response.data;
})

export const addTodo = createAsyncThunk("todos/add", async(newTodo)=>{
    const response = await axios.post("http://localhost:8080/rest/api/todo-app/add", newTodo);
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
        })

        builder.addCase(addTodo.fulfilled, (state, action)=>{
            state.todos.push(action.payload);

        })
    }
})

export const { } = todoSlice.actions

export default todoSlice.reducer