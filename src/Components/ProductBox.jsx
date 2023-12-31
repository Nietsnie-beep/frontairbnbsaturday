import React from 'react'
import { BrowserRouter as Router, Route, Link, useNavigate  } from 'react-router-dom';

const ProductBox = (props) => {
  console.log("props", props);
  const navigate = useNavigate();
  const datos = props
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center', // Centrar horizontalmente
        alignItems: 'center', // Centrar verticalmente
       // Altura del contenedor
      };
    
      const imageStyle = {
        maxWidth: '100%', // Asegurar que la imagen no exceda el ancho del contenedor
        maxHeight: '100%' // Asegurar que la imagen no exceda la altura del contenedor
      };

  
  return (
    <div className='a-box'>
        <div className="a-b-image" style={containerStyle}>

        <img src={props.image} width="300"  height="200" alt="" style={imageStyle}/>
        </div>
    
    <div className="a-b-text">
        <h2 className='font-bold mb-3'>{props.estado},{props.calle}, {props.numero}  </h2>
        <Link to={`/detalle/${props.id}`}> <button className='productbox-button'> Detalle </button></Link>

    </div>
    
    </div>

    
  )
}

export default ProductBox