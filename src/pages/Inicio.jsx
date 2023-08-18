import React from 'react'
import Navbar from '../Components/Navbar'
import Products from '../Components/Products'
import Header from '../Components/Header'
import ListaHotel from '../Components/ListaHotel'
import Barra from '../Components/Barra'

const Inicio = () => {
  return (
    <div>
        <Navbar />  
        <Header />
        <Barra/>
        <Products />
        <ListaHotel />

    </div>
  )
}

export default Inicio