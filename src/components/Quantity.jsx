import React, { useContext, useReducer, useState } from 'react'
import CartContext from '../context/CartContext'
import { types } from '../reducer/CartTypes'
import "./quantity.css"

const Quantity = ({style}) => {

    const cart = useContext(CartContext)

    const {cartState , cartDispatch} = cart


    const [counter, setCounter] = useState(1)


    const handle = (action)=>{
        if(action === "increment"){
          setCounter(counter + 1)
          cartDispatch({type:types.ADD_QUANTITY,payload:{id:5572}})

        }
        else{
          setCounter(counter - 1)
          cartDispatch({type:types.LESS_QUANTITY,payload:{id:5572}})
        }
    }

  return (
    <div className='container-quantity'>
        <button style={style} className="controller-quantity" onClick={()=> counter !== 1 && handle("decrement")} >-</button>
        <p className='quantity'>{counter}</p>
        <button className="controller-quantity" onClick={()=> counter !== 5 && handle("increment")} >+</button>
    </div>
        
  )
}

export default Quantity