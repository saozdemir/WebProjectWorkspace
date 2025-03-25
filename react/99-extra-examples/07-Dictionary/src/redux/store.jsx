import {configureStore} from "@reduxjs/toolkit";
import wordReducer from "./wordSlice";
/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 25 Mar 2025
 * <p>
 * @description:
 */
export const store = configureStore({
    reducer: {
        word: wordReducer,
    }
})