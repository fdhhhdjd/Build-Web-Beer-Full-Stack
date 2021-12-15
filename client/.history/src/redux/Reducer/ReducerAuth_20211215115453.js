import * as types from "../ActionTypes";
const initialState = {
  loading: false,
  error: null,
  tokens: [],
  users: [],
  isAdmin: false,
  isLogout: false,
  CartUser: [],
};
const CartsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_API_START:
    case types.REGISTER_API_START:
    case types.TOKEN_API_START:
    case types.LOGOUT_API_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOGIN_API_SUCCESS:
    case types.REGISTER_API_SUCCESS:
      return {
        ...state,
        loading: false,
        isLogout: true,
      };
    case types.LOGOUT_API_SUCCESS:
      return {
        ...state,
        loading: false,
        isLogout: false,
      };
    case types.TOKEN_API_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        isLogout: true,
        isAdmin: action.payload.isAdmin,
        CartUser: action.payload.carts,
      };
    case types.LOGIN_API_FAIL:
    case types.REGISTER_API_FAIL:
    case types.TOKEN_API_FAIL:
    case types.LOGIN_API_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default CartsReducer;
