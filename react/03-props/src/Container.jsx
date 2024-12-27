import React from 'react'

function Container(props) {//! Bu kısıma gelen Container için verilmiş olan Product componentidir.
//* props yerine parantez içinde {children} ile destruct edilmiş nesne de kullanılabilirdi.
    return (
        <>
            <div>Container Çalıştı</div>
            {props.children}
            {/* nesne desruct edilmişse props.children yerine doğrudan children yazılarak kullanılır.*/}
        </>
    )
}

export default Container
