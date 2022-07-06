import React from 'react'
import styled from 'styled-components'



const Button = styled.button`
    background: ${(props) =>
      props.primary ? `rgb(224, 90, 0)` : 'transparent'};
    color: ${(props) => (props.primary ? `white` : `rgb(224, 90, 0)`)};
    width: ${props => props.width || `100%`};
    border: ${(props) =>
      props.primary ? `none` : `1px solid rgb(224, 90, 0)`};
    border-radius: 5px;
    padding: 1rem 2rem;
    font-size: 1rem;
    cursor: pointer;
    transition:all 0.2s ease;

    

    &:hover {
      background-color:${props => props.primary ? "rgb(187, 75, 0)" : "rgba(255, 197, 159, 0.322)"};
      color : ${props => props.primary && "white" };
      box-shadow:${props => props.shadow && "0 5px 15px rgba(0,0,0,0.4)"}
    }
  `

const Boton = ({children,...props}) => {
  return (
    <>
        <Button {...props}>
            {children}
        </Button>
    </>
  )
}

export default Boton