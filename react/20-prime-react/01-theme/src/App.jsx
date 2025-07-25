import {useEffect, useState} from 'react'
import './App.css'
import {Calendar} from "primereact/calendar";
import ThemeSelect from "./ThemeSelect.jsx";
import {THEMES} from "./themes.jsx";
import {Password} from 'primereact/password';
import {PrimeIcons} from "primereact/api";
import '@primereact/themes/bootstrap4-light-blue/theme.css'

function changeTheme(theme) {
    const themeLink = document.getElementById('theme-link');
    if (themeLink) {
        themeLink.href = `/themes/${THEMES[theme]}/theme.css`;
    }
}

function App() {
    const [date, setDate] = useState(new Date())
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        changeTheme(theme);
    }, [theme]);

    return (
        <>
            <div>
                <ThemeSelect theme={theme} setTheme={setTheme} />
                <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon />
                <div className={"p-inputgroup flex-1"}>
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-lock"></i>
                                </span>
                    <Password value={value}
                              onChange={(e) => setValue(e.target.value)} toggleMask feedback={true}
                              inputStyle={{ width: "100%" }} placeholder={"Şifre"}/>
                </div>
            </div>
        </>
    )
}

export default App