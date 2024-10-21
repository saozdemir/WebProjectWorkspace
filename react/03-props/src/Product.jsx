import React from 'react'

function Product(props) {
    console.log(props);
    //Props ile gelen attribute değerlerini atadık.
    const { productName, price } = props;
    return (
        <div>
            <div>ÜRÜN BİLGİLERİ</div>
            <div>
                {/* <div>İsim: {props.productName}</div>
                <div>Fiyat: {props.price} TL</div> */}
                <div>İsim: {productName}</div>
                <div>Fiyat: {price} TL</div>
            </div>
        </div>
    )
}

export default Product