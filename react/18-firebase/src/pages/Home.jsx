import React, {useEffect, useState} from 'react'
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../Firebase.jsx";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

function Home() {
    const [user, setUser] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        onAuthStateChanged(auth, (userCredential) => {
            if (auth.currentUser != null) {
                if (userCredential) {
                    setUser(userCredential.email)
                } else {
                    toast.warn("Kimlik doğrulaması yapılmadı.")
                    navigate("/auth");
                }
            }
        })
    }, [])
    return (
        <div>
            {`Merhaba>>   ${user}`}
        </div>
    )
}

export default Home
