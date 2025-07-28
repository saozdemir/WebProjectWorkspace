import { Dropdown } from 'primereact/dropdown';
import { useAppDispatch, useAppSelector } from '../hooks/hooks.ts';
import { setTheme } from '../redux/slice/themeSlice.ts';
/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 28 Jul 2025
 * <p>
 * @description:
 */

interface ThemeOption {
    name: string;
    code: string;
}

function ThemeSwitcher() {
    const dispatch = useAppDispatch();
    const currentTheme = useAppSelector((state) => state.theme.theme);

    const themes: ThemeOption[] = [
        { name: 'Açık - İndigo', code: 'lara-light-indigo' },
        { name: 'Koyu - İndigo', code: 'lara-dark-indigo' },
        { name: 'Açık - Mavi', code: 'lara-light-blue' },
        { name: 'Koyu - Mavi', code: 'lara-dark-blue' },
        { name: 'Saga', code: 'saga-blue' },
        { name: 'Vela', code: 'vela-blue' },
        { name: 'Arya', code: 'arya-blue' },
        {name: 'Koyu - Soho', code: 'soho-dark' },
        {name: 'Açık - Soho', code: 'soho-light' },
        {name: 'Bootstrap - Açık', code: 'bootstrap4-light-blue' },
        {name: 'Bootstrap - Koyu', code: 'bootstrap4-dark-blue' },
        {name: 'Viva - Açık', code: 'viva-light'},
        {name: 'Viva - Koyu', code: 'viva-dark'},
        {name: 'Soho - Açık', code: 'soho-light' },
        {name: 'Soho - Koyu', code: 'soho-dark' },
        {name: 'MDC - Açık', code: 'mdc-light-indigo' },
        {name: 'MDC - Koyu', code: 'mdc-dark-indigo' },
        {name: 'MD - Açık', code: 'md-light-indigo' },
        {name: 'MD - Koyu', code: 'md-dark-indigo' },
    ];

    const handleThemeChange = (e: { value: string }) => {
        dispatch(setTheme(e.value));
    }


    return (
        <div className="p-d-flex p-jc-center p-ai-center" style={{ marginBottom: '20px' }}>
            <span className="p-mr-2">Tema Seçin: </span>
            <Dropdown
                value={currentTheme}
                options={themes}
                onChange={handleThemeChange}
                optionLabel="name"
                optionValue="code"
                placeholder="Bir Tema Seçin"
            />
        </div>
    )
}

export default ThemeSwitcher;
