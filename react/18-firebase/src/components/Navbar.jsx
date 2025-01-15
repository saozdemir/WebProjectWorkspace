import React from 'react'
import {signOut} from "firebase/auth";
import {auth} from "../Firebase.jsx";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

function Navbar() {
    const navigate = useNavigate();

    const logout = async () => {
        await signOut(auth);
        toast.info("Çıkış yapıldı.")
        navigate("/auth");
    }

    return (
        <div className={"navbar"}>
            <div className={"navbar-left"}>FIREBASE</div>
            <div onClick={logout} className={"navbar-right"}>Çıkış Yap</div>
        </div>
    )
}

export default Navbar
