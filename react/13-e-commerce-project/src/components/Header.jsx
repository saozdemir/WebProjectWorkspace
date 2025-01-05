import React from 'react';
import "../css/Header.css"
import {CiShoppingBasket, CiLight} from "react-icons/ci";
import {FaMoon} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

function Header() {
    const [theme, setTheme] = React.useState(false);

    const navigate = useNavigate();

    const changeTheme =()=>{
        //! Tüm uygulamayı saran "root" componentini aldık.
        const root = document.getElementById("root")
        if(theme){
            root.style.backgroundColor = "black";
            root.style.color = "white";
        } else {
            root.style.backgroundColor = "white";
            root.style.color = "black";
        }
        setTheme(!theme);
    }
    return (
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
            <div className={"flex-row"}>
                <img className={"logo"} src={"./src/images/logo.png"} alt="logo" onClick={()=>navigate("/")}/>
                <p className={"logo-text"}>VITE A.Ş.</p>
            </div>
            <div className={"flex-row"}>
                <input className={"search-input"} type="text" placeholder={"Ara"}/>
                <div>
                    {
                        theme ? <FaMoon className={"icon"} onClick={changeTheme}/> : <CiLight className={"icon"} onClick={changeTheme}/>
                    }

                    {/*<FaMoon className={"icon"}/>*/}
                    <CiShoppingBasket className={"icon"}/>
                </div>

            </div>
        </div>
    );
}

export default Header;