import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedProduct} from "../redux/slices/productSlice.jsx";
import "../css/ProductDetails.css";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";


function ProductDetails() {
    const {id} = useParams();//! RouterConfig altında Route ile gelen ":id" değerini almak için kullandık.
    const {products, selectedProduct} = useSelector((store) => store.product);
    const {title, price, description, image} = selectedProduct;
    const [count, setCount] = useState(0);

    const dispatch = useDispatch();

    const increment = () => {
        setCount(count+1);
    }

    const decrement = () => {
        if(count>0){
            setCount(count-1);
        }
    }

    const getProductById = () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product));
            }
        })
    }

    useEffect(() => {
        getProductById();
    }, []);
    return (
        <div className={"product-details-wrapper"}>
            <div style={{marginRight: "40px"}} >
                <img className={"image-details"} src={image} />
            </div>
            <div>
                <h1 className={"image-details-title"}>{title}</h1>
                <p className={"details-description"}>{description}</p>
                <h1 className={"details-price"}>{price} ₺</h1>
                <div className={"amount-div"}>
                    <CiSquarePlus className={"button-plus"} onClick={() => increment()} />
                    <span className={"amount"}>{count}</span>
                    <CiSquareMinus className={"button-minus"} onClick={() => decrement()} />
                </div>
                <div>
                    <button className={"button-add-card "}>Sepete Ekle</button>
                </div>
            </div>

        </div>
    );
}

export default ProductDetails;