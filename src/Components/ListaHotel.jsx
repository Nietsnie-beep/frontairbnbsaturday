
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductBox from './ProductBox'
import p1image from '../images/s1.png'
import ProductHabitaciones from './ProductHabitaciones';
import Habitaciones from '../pages/Habitaciones';

const ListaHotel = () => {
    const [selectedHotel, setSelectedHotel] = useState(null);
    const [data, setData] = useState([]);

    const handleHotelClick = (hotelId) => {
        console.log(hotelId)
        setSelectedHotel(hotelId);
    };
    

    useEffect(() => {
        // Realizar la solicitud a la API cuando el componente se monta
        axios.get('http://192.168.100.84:8000/alojamientoFiltro/1')
          .then(response => {
            setData(response.data); // Guardar los datos en el arreglo
          })
          .catch(error => {
            console.error('Error al obtener los datos:', error);
          });
      }, []);
  
  return (
    <div id='products'>
        <h1>HOTELES</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio eaque id suscipit voluptas maxime vero quis quibusdam libero tempora sint voluptatem omnis aperiam quo, delectus amet commodi fuga exercitationem.</p>
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