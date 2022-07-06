import React, { useEffect, useReducer } from 'react'
import CartReducer, { initialState } from '../reducer/CartReducer'
import { types } from '../reducer/CartTypes'
import CartContext from './CartContext'

const CartProvider = ({children}) => {
  
    const [cartState,cartDispatch] = useReducer(CartReducer,initialState) 


    useEffect(()=>{

        
        /* const cart = localStorage.getItem("cart")

        cart && cart.length === 0 && localStorage.removeItem("cart")

        cart !== null && cartDispatch({type:types.ADD_TO_CART,payload:JSON.parse(cart)})        
 */
    },[])


    useEffect(()=>{

       

    },[cartState])


    const data = {
        cartState,
        cartDispatch
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
  )
}

export default CartProvider