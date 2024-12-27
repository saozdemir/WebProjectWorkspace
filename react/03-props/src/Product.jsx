import React from 'react'

function Product(props) {//!{productName, price}şeklinde doğrudan props yerine de yazılabilir.
    /*props ile App componentinde tanımlanan değerler*/
    //! Oject destructing
    const {productName, price} = props;

    return (
        <div>
            <div> Ürün Bilgileri</div>
            <div>
                <div>İsim: {productName}</div>
                <div>Fiyat:{price}TL</div>
                {/*<div>İsim: {props.productName}</div>*/}
                {/*<div>Fiyat:{props.price}TL</div>*/}
            </div>
            <hr/>
        </div>
    )
}

export default Product
