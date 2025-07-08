import {useEffect, useState} from 'react'
import './App.css'
import {Calendar} from "primereact/calendar";
import ThemeSelect from "./ThemeSelect.jsx";
import {THEMES} from "./themes.jsx";

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
            </div>
        </>
    )
}

export default App