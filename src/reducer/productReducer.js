import types from "./typesProduct";

const initialState = {
  producto: {},
  variationActive: {},
  variations:false,
  options: [],
  quantity:1,
  cart: [],
};

const productReducer = (state, action) => {
  switch (action.type) {

    case types.PRODUCT_ACTIVE:
      let description = action.payload.description;

      return {
        ...state,
        producto: { ...action.payload },
      };

    case types.VARIATIONS: {
      return {
        ...state,
        variations: [action.payload],
      };
    }

    case types.SELECT_OPTIONS:
      const productContains = state.options.find(
        (el) => el.fromOption === action.payload.fromOption
      );

      if (productContains) {
        return {
          ...state,
          options: state.options.map((ele) =>
            ele.fromOption === action.payload.fromOption
              ? {
                  ...ele,
                  option: action.payload.option,
                }
              : {
                  ...ele,
                }
          ),
        };
      }

      return { ...state, options: [...state.options, action.payload] };

    case types.VARIATION_ACTIVE:
      return { ...state, variationActive: { ...action.payload } };

    case types.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    default:
      return state;
  }
};

export { initialState };
export default productReducer;
