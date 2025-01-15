import React, {useState} from 'react'
import './App.css'
import RouterConfig from "./config/RouterConfig.jsx";
import Navbar from "./components/Navbar.jsx";
//! Uyarı mesajları için import gerekiyor.
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    //* npm install react-router-dom
    //* npm i react-toastify
    //* npm install react-icons
    //* npm install firebase


    return (
        <div>
            <Navbar/>
            <RouterConfig/>
            {/*Uyarı mesajlarının çalışması için gerekli*/}
            <ToastContainer position={"top-right"} autoClose={1200}/>
        </div>
    )
}

export default App
