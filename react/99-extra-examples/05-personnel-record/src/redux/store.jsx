import {configureStore} from '@reduxjs/toolkit'
import personnelReducer from "../redux/personnelSlice.jsx"

export const store = configureStore({
    reducer: {
        personnel: personnelReducer,
    },
})