import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {TodoInitialState} from "../types/TodoInitialState.tsx";
import {TodoType} from "../types/TodoType.tsx";

const initialState: TodoInitialState = {
    todos: [] //*Başlangıç değeri boş dizi verildi
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        //* State todoinitial state değerine karşılık geliyor. Action ise TodoType ile tanımlanan interface türünde olacak
        //* PayloadAction TypeScript ile gelen özelliktir.
        createTodo: (state: TodoInitialState, action: PayloadAction<TodoType>) => {
            state.todos = [...state.todos, action.payload];//? action.payload => {id, content}

        }
    }
})

// Action creators are generated for each case reducer function
export const {createTodo} = todoSlice.actions

export default todoSlice.reducer