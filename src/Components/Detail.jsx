import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Detail = () => {
  const location = useLocation();
  const {capacidad} = useParams();



  // Aquí podrías realizar una solicitud a la API para obtener los detalles basados en el ID



 
  return (
    <div>
      <h1>Pantalla de Detalle</h1>
      <h1>Capacidad {capacidad}</h1>
    </div>
  );
}

export default Detail