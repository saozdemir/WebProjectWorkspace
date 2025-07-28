import { createSlice  } from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 28 Jul 2025
 * <p>
 * @description:
 */

export interface ThemeState {
    theme: string;
}

const getInitialTheme = ():string => {
    if(typeof window !== "undefined") {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme ? savedTheme : "lara-light-indigo"; // Default theme
    }
    return "lara-light-indigo";
}

const initialState: ThemeState = {
    theme: getInitialTheme(),
}

export const themeSlice = createSlice({
   name:'theme',
    initialState,
    reducers:{
       setTheme: (state, action: PayloadAction<string>) => {
           state.theme = action.payload;
           if(typeof window !== "undefined") {
               localStorage.setItem("theme", action.payload);
           }
       }
    }
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;