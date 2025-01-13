import React from 'react'

function CustomTabPanel(props) {
    const {value, index, children}=props; //! Bir component içine yazılmış olan değer children'dır. Aynı isim ile alınır (children).
    return (
        <div>
            {/*Tıklanan tab valuesi ile index birbirine eşit ise o tab altındaki children componenti set et.*/}
            {value === index && (children)}
        </div>
    )
}

export default CustomTabPanel
