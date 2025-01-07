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

        },

        //* Dışarıdan alınacak id number türünde olacağı için tipi number ayarlandı.
        removeTodoById: (state: TodoInitialState, action: PayloadAction<number>) => {
            state.todos = [...state.todos.filter((todo: TodoType) => todo.id !== action.payload)];

        },

        //* todos üzerinde dön ve güncellenen id sıradaki id ile eşit değil ise todosdaki sıradaki eleman kalsın.
        //* eğer idler eşit ise action.payload ile gelen güncel değer diziye eklensin.
        updateTodo: (state: TodoInitialState, action: PayloadAction<TodoType>) => {
            state.todos = [...state.todos.map((todo: TodoType) => todo.id !== action.payload.id ? todo : action.payload)]
        }
    }
})

// Action creators are generated for each case reducer function
export const {createTodo, removeTodoById, updateTodo} = todoSlice.actions

export default todoSlice.reducer