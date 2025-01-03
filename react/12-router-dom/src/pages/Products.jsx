import React from 'react'
import Product from "./Product.jsx";
import {products} from "../data/products.jsx";

function Products() {
    //! ürünleri data/products.jsx altından aldık.
    return (
        <div>
            {products && products.map((product) => (
                <Product key={product.id} product={product}></Product>
            ))}
        </div>
    )
}

export default Products
