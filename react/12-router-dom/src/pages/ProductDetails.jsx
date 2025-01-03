import React from 'react'
import {useParams} from "react-router-dom";
import {products} from '../data/products.jsx'
import Product from "./Product.jsx";


function ProductDetails() {
    // const params = useParams();
    const {id} = useParams();
    return (
        <div>
            <h1>Ürün Detayı</h1>
            <hr/>
            {
                products && products.map((product) => {
                    if (product.id == id) {
                        return <Product key={id} product={product}></Product>
                    }
                })
            }
        </div>
    )
}

export default ProductDetails
