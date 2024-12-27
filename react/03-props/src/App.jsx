import './App.css'
import Product from "./Product.jsx";
import Container from "./Container.jsx";

function App() {

    return (
        <>
            {/* productName ve price props olarak Product componentine gönderildi.*/}
            {/*<Product productName="Ayakkabı" price={3250}></Product>*/}
            {/*<Product productName="Pantolon" price={950}></Product>*/}
            <Container>
                <Product productName={"Ayakkabı"} price={145}></Product>
                <Product productName={"Pantolon"} price={100}></Product>
            </Container>

        </>
    )
}

export default App
