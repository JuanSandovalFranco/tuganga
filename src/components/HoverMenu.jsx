import React,{useState} from 'react'
import styled from 'styled-components'
import "./HoverMenu.css"

import { motion } from 'framer-motion'


const Menu = styled.div`

        background:white;
        min-width:250px;
        min-height:5rem;
        border-radius:10px;
        padding:2rem 1rem;
        position:absolute;
        top:3.8rem;
        left:-5rem;
        display:none;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        z-index:10000;
        transition: all 1s ease;
        

        &:hover{
          display:block;
        }
        
    `


const HoverMenu = ({children,onHover}) => {

  return (
    <Menu as={motion.div} initial={{opacity:0}} animate={{opacity:1}} className='dropdown'>
          {children}
    </Menu>
  )
}

export default HoverMenu