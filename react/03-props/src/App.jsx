import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from './Container'
import Product from './Product'

function App() {
  const productName = "Buzdolabı"

  return (
    <div>
      {/* <Product productName="Ayakkabı" price={3200} />
      <hr />
      <Product productName="Pantolon" price={950} />
      <hr />
      <Product productName={productName} price={20000} /> */}

      <Container>
        <Product productName="Bilgisayar" price={100000}></Product>
      </Container>
    </div>
  )
}

export default App
