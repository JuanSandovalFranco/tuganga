import React from 'react'
import './information.css'

const Information = ({children}) => {
  return (
    <div className='info-section'>
        {children}
    </div>
  )
}

export default Information