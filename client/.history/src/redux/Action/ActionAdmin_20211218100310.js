import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as types from "../ActionTypes";
export const LoginStart = () => ({
  type: types.LOGIN_API_START,
});
export const LoginSuccess = (api) => ({
  type: types.LOGIN_API_SUCCESS,
  payload: api,
});
export const LoginFail = (error) => ({
  type: types.LOGIN_API_FAIL,
  payload: error,
});
export const RegisterStart = () => ({
  type: types.REGISTER_API_START,
});
export const RegisterSuccess = (api) => ({
  type: types.REGISTER_API_SUCCESS,
  payload: api,
});
export const RegisterFail = (error) => ({
  type: types.REGISTER_API_FAIL,
  payload: error,
});
export const TokenStart = () => ({
  type: types.TOKEN_API_START,
});
export const TokenSuccess = (api) => ({
  type: types.TOKEN_API_SUCCESS,
  payload: api,
});
export const TokenFail = (error) => ({
  type: types.TOKEN_API_FAIL,
  payload: error,
});
export const LogoutStart = () => ({
  type: types.LOGOUT_API_START,
});
export const LogoutSuccess = () => ({
  type: types.LOGOUT_API_SUCCESS,
});
export const LogoutFail = () => ({
  type: types.LOGOUT_API_FAIL,
});
export const loginInitiate = (email, password) => {
  return async function (dispatch) {};
};
