import React, { useEffect, useState } from 'react'

import './SliderProduct.css'


const ProductMedia = (props) => {

  const [productActive, setProductActive] = useState(props.images[0].src)

  return (
    <div className='slider-product'>
      <div className='images-product'>
        {props.images.map((el)=>
        
      <a className={`image-view ${productActive === el.src && "active-image"}`} key={el.id} href="#" onClick={()=> setProductActive(el.src)} onMouseEnter={()=> setProductActive(el.src)}  >
        <img src={el.src} alt={el.alt} width="50" height="50"/>
      </a>
        )}
      </div>
      <div className='container-image-zoom'>
          
          
      </div>
    </div>
  )
}

export default ProductMedia