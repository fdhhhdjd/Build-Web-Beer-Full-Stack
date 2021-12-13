import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as types from "../ActionTypes";
export const getProductStart = () => ({
  type: types.GET_PRODUCT_START,
});
export const getProductSuccess = (api) => ({
  type: types.GET_PRODUCT_SUCCESS,
  payload: api,
});
export const getProductFail = (error) => ({
  type: types.GET_PRODUCT_FAIL,
  payload: error,
});
export const GetProductInitialState = () => {
  return async function (dispatch) {
    dispatch(getProductStart());
    await axios
      .get("/api/products")
      .then((res) => {
        const fetchAll = res.data;
        dispatch(getProductSuccess(fetchAll));
      })
      .catch((error) => {
        dispatch(getProductFail(error));
      });
  };
};
