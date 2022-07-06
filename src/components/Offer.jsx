import React from 'react'

const Offer = (props) => {

    let style = {
        backgroundColor:"rgb(185,255,155,55%)",
        color:"#31A315",
        padding:"5px 1rem",
        textAlign:"center",
        fontWeight:500,
        minWidth:"80px",
        width:"min-content",
        height:"20px",
        borderRadius:"5px",
        ...props.style
    }


    return (
    <span style={style} className={`offer-info ${props.class}`}>
        {props.text + "% OFF"}
    </span>
  )
}

export default Offer