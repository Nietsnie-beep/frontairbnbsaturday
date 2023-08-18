
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ProductBox from './ProductBox'
import p1image from '../images/s1.png'
const Products = () => {

const [housing, setHousing] = useState([])
const navigate = useNavigate();
useEffect(() => {
    axios.get('http://192.168.1.89:8000/alojamientoFiltro/2')
    .then(response => {
      // Actualizar el estado con los datos obtenidos de la API
      setHousing(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}, []);

const irAPantallaB = (id) => {
  navigate(`/detalle/${id}`);
};

  return (
    <div id='products'>
        <h1>"Comodidad y encanto."</h1>
        <br/>
        <p>"Alojamiento que supera expectativas."</p>
        <div className="a-container">

        {housing.map(quarters => (
       <ProductBox image={quarters.mapa} title={quarters.nombre} id={quarters.id} estado ={quarters.estado} calle = {quarters.calle} numero= {quarters.numero} />

        ))}
        </div>
    </div>
  )
}

export default Products