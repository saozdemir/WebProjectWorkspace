/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 25 Tem 2025
 * <p>
 * @description:
 */
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useAppDispatch } from "../store";
import type { RootState} from "../store";
import { setTheme, toggleTheme} from "../store/themeSlice";
import type { ThemeType } from "../store/themeSlice";

export const useTheme = () => {
    const dispatch = useAppDispatch();
    const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);

    // Temayı CSS'e uygula
    useEffect(() => {
        const themeLink = document.getElementById("theme-link") as HTMLLinkElement;
        if (themeLink) {
            themeLink.href = `/styles/${currentTheme}.css`;
        }
    }, [currentTheme]);

    const changeTheme = (theme: ThemeType) => {
        dispatch(setTheme(theme));
    };

    const switchTheme = () => {
        dispatch(toggleTheme());
    };

    return {
        currentTheme,
        changeTheme,
        switchTheme,
    };
};