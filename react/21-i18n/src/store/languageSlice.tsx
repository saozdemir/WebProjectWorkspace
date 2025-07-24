/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 24 Tem 2025
 * <p>
 * @description:
 */
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import i18n from "../i18n";

interface LanguageState {
    currentLang: string;
}

const savedLang = localStorage.getItem("language") || "tr";

const initialState: LanguageState = {

    currentLang: savedLang
};

const languageSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<string>) => {
            state.currentLang = action.payload;
            i18n.changeLanguage(action.payload);
            localStorage.setItem("language", action.payload);
        },
    },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;