import React from 'react';
import "../css/Header.css"
import {CiShoppingBasket, CiLight} from "react-icons/ci";
import {FaMoon} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import Badge from '@mui/material/Badge';
import {useDispatch, useSelector} from "react-redux";
import {setDrawer} from "../redux/slices/basketSlice.jsx";
import {searchProducts} from "../redux/slices/productSlice.jsx";

function Header() {
    const [theme, setTheme] = React.useState(false);

    const navigate = useNavigate();

    const {products} = useSelector((store) => store.basket);

    const {filteredProducts} = useSelector((store) => store.product);

    const dispatch = useDispatch();

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

    const searchProductsByTitle =(title)=>{
        const searchTitle = title.trim();
        if(searchTitle.length >= 0 && searchTitle!==""){
            dispatch(searchProducts(searchTitle));
        }
        console.log(filteredProducts);
    }

    return (
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
            <div className={"flex-row"}>
                <img className={"logo"} src={"./src/images/logo.png"} alt="logo" onClick={()=>navigate("/")}/>
                <p className={"logo-text"}>VITE A.Ş.</p>
            </div>
            <div className={"flex-row"}>
                <input className={"search-input"} type="text" placeholder={"Ara"} onChange={(e)=>searchProductsByTitle(e.target.value)}/>
                <div>
                    {
                        theme ? <FaMoon className={"icon"} onClick={changeTheme}/> : <CiLight className={"icon"} onClick={changeTheme}/>
                    }

                    {/*<FaMoon className={"icon"}/>*/}
                    {/* Ürünlerin sepetteki sayısını göstermek için kullanıldı.*/}
                    <Badge badgeContent={products.length} color={"error"} onClick={()=> dispatch(setDrawer())}>
                        <CiShoppingBasket className={"icon"}/>
                    </Badge>

                </div>

            </div>
        </div>
    );
}

export default Header;