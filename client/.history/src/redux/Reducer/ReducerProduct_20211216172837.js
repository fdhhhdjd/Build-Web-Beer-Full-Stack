import * as types from "../ActionTypes";
const initialState = {
  product: [],
  loading: false,
  error: null,
  cart: [],
  results: [],
  history: [],
};
const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCT_START:
    case types.GET_HISTORY_START:
      return {
        ...state,
        loading: true,
      };
    case types.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload.products,
        results: action.payload,
      };
    case types.ADD_PRODUCT_SUCCESS:
      const item = state.product.find(
        (product) => product.id === action.payload._id
      );
      const inCart = state.cart.find((item) =>
        item.id === action.payload._id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload._id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
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
