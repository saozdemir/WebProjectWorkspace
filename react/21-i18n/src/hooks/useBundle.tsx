/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 24 Tem 2025
 * <p>
 * @description:
 */
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store";
import type { RootState} from "../store";
import { setLanguage } from "../store/languageSlice";

/**
 * Custom i18n hook.
 * @returns bundle: (key: string, options?: any) => string
 *          currentLang: string
 *          changeLang: (lang: string) => void
 */
export const useBundle = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const currentLang = useSelector((state: RootState) => state.language.currentLang);

    const changeLang = (lang: string) => {
        dispatch(setLanguage(lang));
    };

    return {
        bundle: t,          // t fonksiyonunu bundle olarak dışarıya veriyoruz
        currentLang,
        changeLang,
    };
};