import React from 'react'

const Container = ({children,displayStyle}) => {
  
  let styleContainer = {
    display:displayStyle,
    width:"90%",
    margin:"auto" 
  }
  
  return (

    <div style={styleContainer}>
        {children}
    </div>
  )
}

export default Container