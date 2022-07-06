import React, { useState } from 'react'
import "./verMas.css"

const VerMas = ({children , look,...props}) => {
  
    const [see, setSee] = useState(look)
  
    return (
    
        
        <>
        {see ? <div {...props} >{children}</div> : <a className='target-show target-visible' onClick={()=> setSee(true)}>Ver Mas</a>}
        {see && <a className='target-show target-hidden' onClick={()=> setSee(false)}>Ver Menos</a>}
        </>
        
  )
}

export default VerMas