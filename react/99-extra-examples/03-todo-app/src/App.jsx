import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from "./componets/Header.jsx";
import TodoList from "./componets/TodoList.jsx";
import TodoCreate from "./componets/TodoCreate.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <Header></Header>
            <TodoCreate></TodoCreate>
            <TodoList></TodoList>
        </div>
    )
}

export default App
