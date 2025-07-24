import './App.css'
import Login from "./Login.tsx";
import {useTheme} from "./hooks/useTheme.tsx";
import {useEffect} from "react";
import ThemeSwitcher from "./ThemeSwitcher.tsx";

function App() {
    const { currentTheme } = useTheme();

    // İlk açılışta kaydedilen temayı uygula
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        const themeLink = document.getElementById("theme-link") as HTMLLinkElement;
        if (themeLink) {
            themeLink.href = `/styles/${savedTheme}.css`;///light.css
        }
    }, []);

  return (



    <div >
        <ThemeSwitcher/>
        <Login/>
    </div>
  )
}

export default App
