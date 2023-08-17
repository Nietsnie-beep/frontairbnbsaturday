import React from 'react'

const ProductBox = (props) => {
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
        <button className='productbox-button'>Order Now</button>
    </div>
    
    </div>

    
  )
}

export default ProductBox