import {createSlice} from "@reduxjs/toolkit";

//!State tanımlaması yapıldı.
const initialState = {
    value: 55,
}

export const counterSlice = createSlice({
    name: "counter",
    initialState, //! Fonksiyonlar reducer içinde tutulur.
    reducers: {
        increment: (state) => {
            state.value = state.value + 1;
        },
        decrement: (state) => {
            state.value = state.value - 1;
        },
        setCounter: (state,action) => {
            state.value = action.payload;
        }
    },

})

//! Fonksiyonlara dışarıdan erişmek için burada export edilmelidir.
export const {increment, decrement, setCounter} = counterSlice.actions
export default counterSlice.reducer;