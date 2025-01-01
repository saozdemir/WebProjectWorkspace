import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Currency from "./components/Currency.jsx";
/*
 * Api Key: fca_live_hV6yrjrP3MB1clt3viqAOxMucHSZ0CIaT039Zh3V
 *
 * GET ile istek atarken
 * https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_hV6yrjrP3MB1clt3viqAOxMucHSZ0CIaT039Zh3V&base_currency=EUR
 * İlk değişken "?"" dem sonra yazılır.
 * Sonra gelen her değişken için "&"" eklenir.
*/



function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
      <Currency></Currency>
    </div>
  )
}

export default App
