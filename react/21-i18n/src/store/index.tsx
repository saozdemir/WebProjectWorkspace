/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 24 Tem 2025
 * <p>
 * @description:
 */
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import languageReducer from "./languageSlice";
import themeReducer from "./themeSlice";

export const store = configureStore({
    reducer: {
        language: languageReducer,
        theme: themeReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;