import types from "./typesProducts"

const initialState = {
    products:[],
}


const productsReducer = (state , action ) => {
    switch(action.type){
        case types.PRODUCTS:
            return {
                ...state,products:action.payload
            }
        
        default:
            return [...state]    
    }
} 


export {initialState}

export default productsReducer