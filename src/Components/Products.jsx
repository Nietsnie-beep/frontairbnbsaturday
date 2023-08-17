import React, { useEffect, useState } from 'react'
import ProductBox from './ProductBox'
import p1image from '../images/s1.png'
import axios from 'axios'
const Products = () => {

const [housing, setHousing] = useState([])

useEffect(() => {
    axios.get('http://192.168.1.83:8000/alojamientoFiltro/2')
    .then(response => {
      // Actualizar el estado con los datos obtenidos de la API
      setHousing(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}, []);

  return (
    <div id='products'>
        <h1>TITULO</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio eaque id suscipit voluptas maxime vero quis quibusdam libero tempora sint voluptatem omnis aperiam quo, delectus amet commodi fuga exercitationem.</p>
        <div className="a-container">

        {housing.map(quarters => (
        <ProductBox image={quarters.mapa}  title={quarters.nombre}/>

        ))}
        </div>
    </div>
  )
}

export default Products