import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from "./Counter.jsx";
import User from "./User.jsx";
import Country from "./Country.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <Counter></Counter>
            <User></User>
            <Country></Country>
        </div>
    )
}

export default App
