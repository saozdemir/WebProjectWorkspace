import { useState } from 'react'
import ThemeManager from './components/ThemeManager';
import ThemeSwitcher from './components/ThemeSwitcher';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { PrimeReactProvider } from 'primereact/api';
// import mysLogo from './assets/images/mys-logo.svg'
import mysLogo from './assets/images/mys-logo 11.png'

import './App.css'
import CalendarUtil from "./components/CalendarUtil.tsx";
import InputUtils from "./components/InputUtils.tsx";

function App() {
  const initialTheme = localStorage.getItem("theme") || "lara-light-indigo";
  const isDark = initialTheme.includes('dark') || initialTheme.includes('vela') || initialTheme.includes('arya');


  return (
      <PrimeReactProvider value={{ ripple: true, unstyled: false, pt: {}}}>
        {/* Bu bileşen görünmez ama tema değişimini yönetir */}
        <ThemeManager />

        <div className="p-4">
          <Card title="PrimeReact Tema Değiştirici">
            <p className="m-0">
              Aşağıdaki menüyü kullanarak uygulamanın genel temasını değiştirebilirsiniz.
              Seçiminiz Redux ile yönetilir ve Local Storage'a kaydedilerek kalıcı hale getirilir.
            </p>
          </Card>

          <div className="card flex justify-content-center mt-4">
            <ThemeSwitcher />
          </div>

          <div className="card mt-4">
            <div>
              <a href="https://www.hvkk.tsk.tr" target="_blank">
                <img src={mysLogo} className="logo" alt="Vite logo"/>
              </a>
            </div>
            <h5 className='mb-3'>Örnek Bileşenler</h5>
            <div className="flex flex-wrap gap-3">
              <Button style={{width: "60px", height:"60px"}} label="*" />
              <Button label="Secondary Buton" severity="secondary"  size={"small"} />
              <Button label="Başarılı" severity="success" />
              <Button label="Bilgi" severity="info" />
              <Button label="Uyarı" severity="warning" />
              <Button label="Yardım" severity="help" />
              <Button label="Tehlike" severity="danger" />
            </div>
            <div className="flex flex-wrap gap-3">
              <CalendarUtil/>
            </div>
            <div className={"flex flex-wrap gap-3 mt-8"}>
              <InputUtils/>
            </div>
          </div>
        </div>
      </PrimeReactProvider>
  )
}

export default App;
