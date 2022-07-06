import React from 'react'
import './cardOptions.css'

const CardsOptions = ({children,onClick,className,name}) => {
  return (
    <button name={name} onClick={(e)=> onClick(e)} className={`cards-options-product ${className ? className : ""}`}>
        {children}
    </button>
  )
}

export default CardsOptions