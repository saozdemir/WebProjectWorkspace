import React, {useState} from 'react'
import {FaGoogle} from "react-icons/fa";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect
} from "firebase/auth";
import {toast} from "react-toastify";
import {auth} from "../Firebase.jsx";
import {useNavigate} from "react-router-dom";

const provider = new GoogleAuthProvider();

function Authentication() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const register = async () => {
        try {
            //const auth =  getAuth();
            const response = await createUserWithEmailAndPassword(auth, email, password);
            const user = response.user;
            if (user) {
                toast.success("Kullanıcı oluşturuldu.");
                setEmail("");
                setPassword("");
            }
        } catch (error) {
            toast.error(error.message);
        }

    }

    const login = async () => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            const user = response.user;
            if (user) {
                toast.success("Giriş başarılı.")
                navigate("/");
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    const loginWithGoogle = async () => {
        try {
            const response = await signInWithPopup(auth, provider);
            // const credential = GoogleAuthProvider.credentialFromResult(response);
            // const token = credential.accessToken;
            const user = response.user;

            if (user) {
                toast.success("Giriş başarılı.")
                navigate("/");
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    //?
    const loginWithGooglePage = async () => {
        const response = await signInWithRedirect(auth, provider);
        const user = response.user;

        if (user) {
            toast.success("Giriş başarılı.")
            navigate("/");
        }
    }
    return (<div className={"auth"}>
        <h3 className={"auth-header"}>Giriş Yap/Kaydol</h3>
        <div className={"input-div"}>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className={"input"} type={"email"}
                   placeholder={"E posta"} autoFocus/>
            <input value={password} onChange={(e) => setPassword(e.target.value)} className={"input"}
                   type={"password"}
                   placeholder={"Şifre"}/>
        </div>
        <div className={"button-div"}>
            <button onClick={loginWithGoogle} className={"google-button"}><FaGoogle/> Google ile giriş</button>
            <button onClick={login} className={"login-button"}>Giriş Yap</button>
            <button onClick={register} className={"register-button"}>Kaydol</button>
        </div>
    </div>)
}

export default Authentication
