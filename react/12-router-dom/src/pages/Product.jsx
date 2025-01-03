import React from 'react'
import {useNavigate} from "react-router-dom";

function Product({product}) {
    const {id, name, price} = product;
    const navigate = useNavigate();

    return (
        <div>
            <h3>Ürün Detayı</h3>
            <h4>İsim: {name}</h4>
            <p>Fiyatı: {price}</p>
            <button onClick={() => navigate("/product-details/" + id)}>Detayına Git</button>
            <hr/>
        </div>
    )
}

export default Product
