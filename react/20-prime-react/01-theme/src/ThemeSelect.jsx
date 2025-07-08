import React from 'react'

const THEMES = {
    light: 'bootstrap4-light-blue',
    dark: 'bootstrap4-dark-blue'
};

function ThemeSelect({ theme, setTheme }) {
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    return (
        <button onClick={toggleTheme}>
            Temayı Değiştir ({theme === 'light' ? 'Koyu' : 'Açık'})
        </button>
    )
}

export default ThemeSelect
