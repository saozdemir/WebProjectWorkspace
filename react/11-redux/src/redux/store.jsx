/*
! Bir store oluşturduk.Bu store'u main.jsx'de Provider componentine props olarak verdik.
* */
import {configureStore} from '@reduxjs/toolkit';
import counterReducer from "../redux/counterSlice.jsx";
import userReducer from "../redux/userSlice.jsx";
//* ProductSlice
//* ApplicationSlice

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer
        //* product: ProductSlice,
        //* app: ApplicationSlice
    },

})