import { types } from "./CartTypes";


const initialState = {
    cart:[],
    total:0
}

const CartReducer = (state,action)=>{

    switch(action.type){

    case types.ADD_QUANTITY:

    return {
        ...state,cart:state.cart.map(el => el.id === action.payload.id ? {...el,quantity:el.quantity + 1} : el)   
      }

      


      case types.LESS_QUANTITY:

      return{
        ...state,cart:state.cart.map(el => el.id === action.payload.id ? {...el,quantity:el.quantity - 1 } : el)   
      }


        case types.ADD_TO_CART:

            const existProduct = state.cart.map(el => el.id === action.payload.id)


              return  existProduct.length === 0 || existProduct[0] === false ? {...state,cart:[...state.cart,action.payload]} : {...state}
                       
        case types.REMOVE_OF_CART:

            return {...state,cart:state.cart.filter(el=> el.id !== action.payload.id )}

        case types.TOTAL_CART:
            
           
            return {...state,total:state.cart.reduce((acumulator,current)=> parseInt(current.offer) * current.quantity + acumulator , 0 )}    

        default:
            return state
    }

}



export {initialState}
export default CartReducer