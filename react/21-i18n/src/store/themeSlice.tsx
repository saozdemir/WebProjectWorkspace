/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 25 Tem 2025
 * <p>
 * @description:
 */
import { createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type ThemeType = "light" | "dark";

interface ThemeState {
    currentTheme: ThemeType;
}

const savedTheme = (localStorage.getItem("theme") as ThemeType) || "light";

const initialState: ThemeState = {
    currentTheme: savedTheme,
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<ThemeType>) => {
            state.currentTheme = action.payload;
            localStorage.setItem("theme", action.payload);
        },
        toggleTheme: (state) => {
            state.currentTheme = state.currentTheme === "light" ? "dark" : "light";
            localStorage.setItem("theme", state.currentTheme);
        },
    },
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;