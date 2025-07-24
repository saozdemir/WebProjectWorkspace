/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 25 Tem 2025
 * <p>
 * @description:
 */
import React from "react";
import { useTheme } from "./hooks/useTheme";
import {useBundle} from "./hooks/useBundle.tsx";

const ThemeSwitcher: React.FC = () => {
    const { currentTheme, switchTheme } = useTheme();
    const {bundle} = useBundle();

    return (
        <button onClick={switchTheme}>
            {currentTheme === "light" ? bundle("switch.to.dark") : bundle("switch.to.light") }
        </button>
    );
};

export default ThemeSwitcher;