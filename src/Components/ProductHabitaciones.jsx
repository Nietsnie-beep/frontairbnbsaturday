import React from 'react'
import Habitaciones from '../pages/Habitaciones';

const ProductHabitaciones = (props) => {

  return (
    <div className='a-box'>
        <div className="a-b-image">

        <img src={props.image} 
        alt=""
         width="300" // Establecer el ancho
        height="200" />
        </div>
    
    <div className="a-b-text">
        <h2>{props.title} </h2>
        <button className='productbox-button' onClick={props.onClick}>Ver Habitaciones</button>
    </div>
    
    </div>

    
  )
}

export default ProductHabitaciones