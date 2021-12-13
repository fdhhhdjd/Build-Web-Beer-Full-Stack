import * as types from "../ActionTypes";
const initialState = {
  product: [],
  loading: false,
  error: null,
};
const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCT_START:
      return {
        ...state,
        loading: true,
      };
    case types.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload.products,
      };
    case types.GET_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default ProductReducer;
