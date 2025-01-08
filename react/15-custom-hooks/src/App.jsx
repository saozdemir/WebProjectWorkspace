import React, {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCounter from "./hooks/useCounter.jsx";
import Counter from "./components/Counter.jsx";
import Toggle from "./components/Toggle.jsx";
import Copy from "./components/Copy.jsx";

function App() {
    //const [copied, copy] = useCopyToClipboard("");

    return (
        <div>
            <Counter></Counter>
            <Toggle></Toggle>
            <Copy></Copy>
        </div>
    )
}

export default App
