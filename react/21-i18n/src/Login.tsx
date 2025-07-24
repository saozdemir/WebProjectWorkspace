/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 24 Tem 2025
 * <p>
 * @description:
 */
import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { useBundle } from "./hooks/useBundle";

const Login: React.FC = () => {
    const { t } = useTranslation();
    const { bundle } = useBundle();

    return (
        <div>
            <LanguageSwitcher />
            <h2>{t("login")}</h2>
            <form>
                <input placeholder={bundle("username")} />
                <input type="password" placeholder={bundle("password")} />
                <button type="submit">{bundle("login")}</button>
            </form>
        </div>
    );
};

export default Login;