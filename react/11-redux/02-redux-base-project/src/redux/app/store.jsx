import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice.jsx";
import userReducer from "../features/userSlice.jsx";
import countryReducer from "../features/countrySlice.jsx";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        country: countryReducer
    },
})