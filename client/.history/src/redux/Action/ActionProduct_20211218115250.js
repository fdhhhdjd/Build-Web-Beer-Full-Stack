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
export const addToCart = (itemID) => {
  return {
    type: types.ADD_PRODUCT_SUCCESS,
    payload: {
      id: itemID,
    },
  };
};

export const getHistoryStart = () => ({
  type: types.GET_HISTORY_START,
});
export const getHistorySuccess = (api) => ({
  type: types.GET_HISTORY_SUCCESS,
  payload: api,
});
export const getHistoryFail = (error) => ({
  type: types.GET_HISTORY_FAIL,
  payload: error,
});
export const getPaymentStart = () => ({
  type: types.GET_PAYMENT_START,
});
export const getPaymentSuccess = (api) => ({
  type: types.GET_PAYMENT_SUCCESS,
  payload: api,
});
export const getPaymentFail = (error) => ({
  type: types.GET_PAYMENT_FAIL,
  payload: error,
});
export const GetProductInitialState = (page, category, sort, search) => {
  return async function (dispatch) {
    dispatch(getProductStart());
    await axios
      .get(`/api/products`)
      .then((res) => {
        const fetchAll = res.data;
        dispatch(getProductSuccess(fetchAll));
      })
      .catch((error) => {
        dispatch(getProductFail(error));
      });
  };
};
export const GetHistoryInitialState = (token) => {
  return async function (dispatch) {
    dispatch(getHistoryStart());
    await axios
      .get("/user/history", {
        headers: { Authorization: token },
      })
      .then((item) => {
        dispatch(getHistorySuccess(item.data));
      })
      .catch((error) => {
        dispatch(getHistoryFail(error));
      });
  };
};
export const GetPaymentInitialState = (token) => {
  return async function (dispatch) {
    dispatch(getPaymentStart());
    await axios
      .get("/api/payment", {
        headers: { Authorization: token },
      })
      .then((res) => {
        const fetchAll = res.data;
        dispatch(getPaymentSuccess(fetchAll));
      })
      .catch((error) => {
        dispatch(getPaymentFail(error));
      });
  };
};