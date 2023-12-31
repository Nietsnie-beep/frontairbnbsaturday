
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductBox from './ProductBox'
import p1image from '../images/s1.png'
import ProductHabitaciones from './ProductHabitaciones';
import Habitaciones from '../pages/Habitaciones';
import Barra from './Barra';

const ListaHotel = () => {
  const handleSearch = (searchData) => {
    // Lógica de búsqueda utilizando searchData (ubicación, huéspedes, habitaciones)
    console.log('Datos de búsqueda:', searchData);
  };
    const [selectedHotel, setSelectedHotel] = useState(null);
    const [data, setData] = useState([]);

    const handleHotelClick = (hotelId) => {
        console.log(hotelId)
        setSelectedHotel(hotelId);
    };
    

    useEffect(() => {
        // Realizar la solicitud a la API cuando el componente se monta
        axios.get('http://192.168.1.89:8000/alojamientoFiltro/1')
          .then(response => {
            setData(response.data); // Guardar los datos en el arreglo
          })
          .catch(error => {
            console.error('Error al obtener los datos:', error);
          });
      }, []);
  
  return (
    <div id='products'>
        <h1>"Lujo y confort excepcionales."</h1>
        <br />
        <p>"Tu hogar lejos de casa te espera en nuestro hotel, donde cada rincón ha sido creado pensando en tu comodidad y bienestar."</p>
        
        <div className="a-container">
        {data.map(item => (
          <ProductHabitaciones 
            key={item.id} 
            image={item.mapa}  
            title={item.nombre} 
            onClick={() => handleHotelClick(item.id)}/>
        ))}
        
        </div>
        {selectedHotel && <Habitaciones hotelId={selectedHotel} />}
    </div>
  )
}

export default ListaHotel