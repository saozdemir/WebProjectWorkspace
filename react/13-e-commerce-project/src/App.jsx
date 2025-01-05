import './App.css'
import PageContainer from "./container/PageContainer.jsx";
import Header from "./components/Header.jsx";
import ProductList from "./components/ProductList.jsx";
import RouterConfig from "./config/RouterConfig.jsx";
import Loading from "./components/Loading.jsx";
import Drawer from '@mui/material/Drawer';
import {useDispatch, useSelector} from "react-redux";
import {store} from "./redux/store.jsx";
import React, {useEffect} from "react";
import {calculateBasket, removeFromBasket, setDrawer} from "./redux/slices/basketSlice.jsx";

function App() {
    const {products, drawer, totalAmount} = useSelector((store)=>store.basket);
    const dispatch = useDispatch();

    const removeItemFromBasket =(product)=>{
        const selection = confirm("Seçilen ürünleri silmek istiyor musunuz?");
        if (selection) {
            dispatch(removeFromBasket(product));
            dispatch(calculateBasket());
        }
    }
    useEffect(() => {
        dispatch(calculateBasket());
    }, []);

    return (
        <div>
            <PageContainer>{/* children props u olarak Header Componentini gönderdik*/}
                <Header></Header>
                <RouterConfig></RouterConfig>
                <Loading/>
                {/*Sepet sekmesi*/}
                {/* Herhangi bir yere tıklandığında onClose tetiklenir.*/}
                <Drawer open={drawer} anchor={"right"} className={"drawer"} onClose={()=>{dispatch(setDrawer())}} >
                    {
                        products && products.map((product) => {
                            return (
                                <div key={product.id}>
                                    <div className={"flex-row"} style={{padding: "25px"}}>
                                        <img style={{marginRight: "5px"}} src={product.image} width={50} height={50}/>
                                        <p style={{
                                            width: "320px",
                                            marginRight: "5px"
                                        }}>{product.title}({product.count})</p>
                                        <p style={{fontWeight: "bold", width: "85px"}}>{product.price} TL</p>
                                        <button className={"delete-item"} onClick={()=> removeItemFromBasket(product)}>Sil</button>
                                    </div>
                                </div>

                            )
                        })
                    }
                    <div>
                        <p style={{textAlign:"center"}}>Toplam Tutar: {totalAmount}</p>
                    </div>
                </Drawer>
            </PageContainer>
        </div>
    )
}

export default App
