import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {toast} from "react-toastify";

const initialState = {
  todos: [],
}

export const getAllTodos = createAsyncThunk("todos", async () => {
  const response = await axios.get("http://localhost:8080/rest/api/todo-app/list");
  return response.data;
})

export const addTodo = createAsyncThunk("todos/add", async (newTodo) => {
  const response = await axios.post("http://localhost:8080/rest/api/todo-app/add", newTodo);
  return response.data;
})

export const deleteTodo = createAsyncThunk("todos/delete", async (deleteId) => {
  const response = await axios.delete(`http://localhost:8080/rest/api/todo-app/delete/${deleteId}`);
  if (response.data) {
    return deleteId;
  }
  return null;
})

export const updateTodo = createAsyncThunk("todos/update", async ({updateId, responseTodo}) => {
  const response = await axios.put(`http://localhost:8080/rest/api/todo-app/update/${updateId}`, responseTodo);
  console.log(response.data);
  return response.data;
})

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    updateTodos: (state, action) => {
      state.todos = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
    })

    builder.addCase(addTodo.fulfilled, (state, action) => {
      const isDuplicate = state.todos.some(todo => todo.id === action.payload.id);
      if (!isDuplicate) {
        state.todos.push(action.payload);
      }

    })

    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      if (action.payload != null) {
        state.todos = state.todos.filter(todo => todo.id !== action.payload);
      }
    })

    builder.addCase(updateTodo.fulfilled, (state, action) => {
      if (!action.payload) return;

      state.todos = state.todos.map(todo =>
        todo.id === action.payload.id ? action.payload : todo
      );
    })

    builder.addCase(updateTodo.rejected, (state, action) => {
      toast.error("Güncelleme başarısız oldu");
      console.error("Update failed:", action.error);
    })
  }
})

export const {updateTodos} = todoSlice.actions

export default todoSlice.reducer
