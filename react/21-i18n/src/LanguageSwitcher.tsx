/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 24 Tem 2025
 * <p>
 * @description:
 */
import React from "react";
import { useBundle } from "./hooks/useBundle";

const LanguageSwitcher: React.FC = () => {
    // const dispatch = useAppDispatch();
    // const currentLang = useSelector((state: RootState) => state.language.currentLang);
    //
    // const changeLang = (lang: string) => {
    //     dispatch(setLanguage(lang));
    // };

    const { currentLang, changeLang } = useBundle();

    return (
        <div>
            <button
                onClick={() => changeLang("en")}
                disabled={currentLang === "en"}
            >
                English
            </button>
            <button
                onClick={() => changeLang("tr")}
                disabled={currentLang === "tr"}
            >
                Türkçe
            </button>
        </div>
    );
};

export default LanguageSwitcher;