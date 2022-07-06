import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import {IoCheckmarkCircleOutline, IoCloseOutline } from "react-icons/io5"

const Notificacion = styled.div`
    display: ${props => props.show === true ? "flex" : "none"};
    gap: 2rem;
    padding: 1rem;
    background: white;
    border-radius: 5px;
    min-width: 15rem;
    width: fit-content;
    max-width:30rem;
    position:fixed;
    bottom:1rem;
    right:1rem;
    box-shadow:0 10px 15px rgba(0,0,0,0.2);
    z-index:1000;
    
    &, .container-icon svg{
        font-size: 1.5rem;
        color:#00c42a;
    }

    

    &, .title-notification{
        font-size: 1rem;
        color: #00c42a;

        
    }

    &, .description-notification{
        margin-top: 1rem;
        font-size: 0.8rem;
        color: #666666;     
    }
    
    .close-notification {
        position: absolute;
        top: 12px;
        right: 10px;
        background-color:white;
        border: none;
        cursor: pointer;
    }

    .close-notification svg{
        font-size: 1.5rem;
        color: #969696;
    }

`


const Notification = ({children,title,icon,type="success"}) => {

    const [show,setShow] = useState(true)
    

    useEffect(()=>{
        setTimeout(()=>{
            setShow(false)
        },5000)
    },[])


  return (
    <Notificacion show={show}>
        <div className="container-icon">
        {
            type === "success" ? <IoCheckmarkCircleOutline ></IoCheckmarkCircleOutline> : <h1>hola</h1> 
            
        }
        </div>
        <div className='content-notification'>
        <h3 className='title-notification'>{title}</h3>
        <p className='description-notification'>{children}</p>
        </div>
        <button className="close-notification" onClick={(e)=> setShow(false)} ><IoCloseOutline></IoCloseOutline></button>
    </Notificacion>
  )
}

export default Notification