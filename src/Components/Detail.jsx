import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Formulario from './Formulario';
import Barra from './Barra';
const Detail = () => {

  

  const {id} = useParams();
  

  const [data, setData] = useState([]);


    useEffect(() => {
        // Realizar la solicitud a la API cuando el componente se monta
        axios.get(`http://192.168.100.84:8000/casaHogarDetail/${id}`)
          .then(response => {
            setData(response.data); 
          })
          .catch(error => {
            console.error('Error al obtener los datos:', error);
          });
      }, [id]);


      console.log(data)
  // Aquí podrías realizar una solicitud a la API para obtener los detalles basados en el ID



 
  return (
    <div>
      <h1>Pantalla de Detalle</h1>
      <h1>Capacidad {data.capacidad}</h1>

      <Formulario data={data}/>
      
    </div>
  );
}

export default Detail