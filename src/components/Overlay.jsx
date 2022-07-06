import React from 'react'
import './overlay.css'

const Overlay = ({children}) => {
  return (
      <div className='container-overlay'>
          {children}
      </div>
      )
}

export default Overlay