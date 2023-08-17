import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductBox from '../Components/ProductBox';

const Habitaciones = ({ hotelId }) => {
    const [data, setData] = useState([]);


    useEffect(() => {
        // Realizar la solicitud a la API cuando el componente se monta
        axios.get(`http://192.168.100.84:8000/casaHogarFiltro/${hotelId}`)
          .then(response => {
            setData(response.data); 
          })
          .catch(error => {
            console.error('Error al obtener los datos:', error);
          });
      }, [hotelId]);

      data.map(a =>{
        console.log(a)
      })

  return (
    <div>
      <h2>Habitaciones del Hotel {hotelId}</h2>
      <ul>
        {data.map(habitacion => (
            
            <ProductBox 
                key={habitacion.id}
                image = {habitacion.imagen}
                title = {habitacion.numero}/>
            
        ))}
      </ul>
    </div>
  );
};

export default Habitaciones;




