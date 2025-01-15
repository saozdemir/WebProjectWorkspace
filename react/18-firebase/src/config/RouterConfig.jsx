import React, {useEffect, useState} from 'react'
import {BrowserRouter, Route, Link, Routes, Navigate} from "react-router-dom";
import Home from "../pages/Home.jsx";
import Authentication from "../pages/Authentication.jsx";
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from "../Firebase.jsx";

function RouterConfig() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userCredential = onAuthStateChanged(auth, (user) => {
            setUser(user);
        })
    }, []);
    return (
        <Routes>
            <Route extact path={"/"} element={user ? <Home/> : <Navigate to={"/auth"}/>}></Route>
            <Route extact path={"/auth"} element={user ? <Navigate to={"/"}/> : <Authentication/>}></Route>
        </Routes>
    )
}

export default RouterConfig
