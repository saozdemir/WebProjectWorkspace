import {useEffect} from "react";
import {useAppSelector} from "../hooks/hooks.ts";

/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 28 Jul 2025
 * <p>
 * @description:
 */
function ThemeManager() {
    const theme = useAppSelector((state) => state.theme.theme);

    useEffect(() => {
        const themeLink = document.getElementById('theme-link') as HTMLLinkElement;
        document.documentElement.style.fontSize = '14px'; // Set base font size
        if (themeLink) {
            themeLink.href = `/themes/${theme}/theme.css`;
        }
    }, [theme]);

    return null;
}

export default ThemeManager;
