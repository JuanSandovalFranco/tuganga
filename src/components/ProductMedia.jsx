import React, { useEffect, useState } from 'react'
import ReactImageMagnify from 'react-image-magnify'

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
          
          <ReactImageMagnify style={{zIndex:20}} className='image-product'  {...{
                smallImage: {
                    alt: 'Wristwatch by Ted Baker London',
                    isFluidWidth: true,
                    src: productActive
                },
                largeImage: {
                    src: productActive,
                    width: 1000,
                    height: 1000
                },

            }} />
      </div>
    </div>
  )
}

export default ProductMedia