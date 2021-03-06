import * as types from "../ActionTypes";
const initialState = {
  AdminUser: [],
  loading: false,
  error: null,
};
const CartsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ADMIN_USER_START:
      return {
        ...state,
        loading: true,
      };
    case types.GET_ADMIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        AdminUser: action.payload,
      };

    case types.GET_ADMIN_USER_FAIL:
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
