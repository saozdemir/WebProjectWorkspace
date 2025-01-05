import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllProducts} from "../redux/slices/productSlice.jsx";
import Product from "./Product.jsx";

function ProductList() {
    //? const {products} => productSlice.jsx initialState içinde tanımlanan ne ise ona göre object destructing yapıldı. (products: [])
    const {products}= useSelector((state) => state.product); //! store.jsx de tanımlanan ne ise o yazılmalı(state.product)
    const dispatch = useDispatch();
    console.log(products);

    useEffect(() => {
        dispatch(getAllProducts());
    }, []);
    return (
        <div className={"flex-row flex-wrap"}>
            {
                products && products.map((product) => (
                    <Product key={product.id} product={product}></Product>
                ))
            }
        </div>
    );
}

export default ProductList;