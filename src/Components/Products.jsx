import React from 'react'
import ProductBox from './ProductBox'
import p1image from '../images/s1.png'
const Products = () => {
  return (
    <div id='products'>
        <h1>TITULO</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio eaque id suscipit voluptas maxime vero quis quibusdam libero tempora sint voluptatem omnis aperiam quo, delectus amet commodi fuga exercitationem.</p>
        <div className="a-container">
        <ProductBox image={p1image}  title="title"/>
        </div>
    </div>
  )
}

export default Products