import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Formulario = (props) => {
    const [formData, setFormData] = useState({
        fechaInicio: null,
        fechaFin: null,
        estado: 2, 
        idAlojamiento: parseInt(props.data.idAlojamiento, 10),
        idHabitacion: parseInt(props.data.id, 10),
        idUsuario: 1, 
      });

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const handleSubmit = (event) => {
        console.log(props.data.id)
        event.preventDefault();
    
        // Realizar la solicitud POST con axios
        axios.post('http://192.168.100.84:8000/reservacionCreacion/', formData)
          .then(response => {
            console.log('Solicitud POST exitosa:', response.data);
            // Realizar acciones adicionales si es necesario
          })
          .catch(error => {
            console.error('Error en la solicitud POST:', error);
          });
      };

    

 
      return (
        <form onSubmit={handleSubmit}>
          <label>
            Fecha Inicio:
            <input
              type="date"
              name="fechaInicio"
              value={formData.fechaInicio}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Fecha Fin:
            <input
              type="date"
              name="fechaFin"
              value={formData.fechaFin}
              onChange={handleInputChange}
            />
          </label>
          <br />
          {/* Estado se manda con valor 2 fijo */}
          <input
            type="hidden"
            name="estado"
            value={2}
          />
          {/* idAlojamiento, idHabitacion e idUsuario se mandan con valores fijos */}
          <input
            type="hidden"
            name="idAlojamiento"
            value={formData.idAlojamiento}
          />
          <input
            type="hidden"
            name="idHabitacion"
            value={formData.idHabitacion}
          />
          <input
            type="hidden"
            name="idUsuario"
            value={formData.idUsuario}
          />
          <br />
          <button type="submit">Enviar</button>
        </form>
      );
    };

export default Formulario