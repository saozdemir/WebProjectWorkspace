import { configureStore } from '@reduxjs/toolkit';
import personnelReducer from './personnelSlice';


export const store = configureStore({
    reducer: {
        personnel: personnelReducer,
    },
});