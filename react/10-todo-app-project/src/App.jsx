import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoCreate from "./components/TodoCreate.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className={"app"}>
            <div style={{
                width: "500px", display: "flex", flexDirection: "column"
                , justifyContent: "center", alignItems: "center"
            }}>
                <TodoCreate></TodoCreate>
                <TodoList></TodoList>
            </div>
        </div>
    )
}

export default App
