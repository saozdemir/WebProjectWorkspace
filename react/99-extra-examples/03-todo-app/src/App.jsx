import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from "./componets/Header.jsx";
import TodoList from "./componets/TodoList.jsx";
import TodoCreate from "./componets/TodoCreate.jsx";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

    return (
        <di>
            <Header></Header>
            <div className="app">
                <TodoCreate></TodoCreate>
                <TodoList></TodoList>
            </div>
            <ToastContainer position={"top-right"} autoClose={1200}/>
        </di>
    )
}

export default App
