import React from 'react'
import Navbar from '../Components/Navbar'
import Products from '../Components/Products'
import Header from '../Components/Header'
import ListaHotel from '../Components/ListaHotel'

const Inicio = () => {
  return (
    <div>
        <Navbar />  
        <Header />
        <Products />
        <ListaHotel />

    </div>
  )
}

export default Inicio