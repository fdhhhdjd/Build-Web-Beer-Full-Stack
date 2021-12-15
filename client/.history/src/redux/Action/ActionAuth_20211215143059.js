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
  return async function (dispatch) {
    dispatch(LoginStart());
    await axios
      .post("/user/login", { email, password })
      .then(({ user }) => {
        dispatch(
          LoginSuccess(
            user,
            toast.success("Login Success Thank You!"),
            localStorage.setItem("firstLogin", true),
            (window.location.href = "/")
          )
        );
      })
      .catch((error) => {
        dispatch(LoginFail(toast.error(error.response.data.msg)));
      });
  };
};
export const RegisterInitiate = (name, email, password) => {
  return async function (dispatch) {
    dispatch(RegisterStart());
    await axios
      .post("/user/register", {
        name,
        email,
        password,
      })
      .then(({ user }) => {
        dispatch(
          RegisterSuccess(
            user,
            toast.success("Register Success Thank You!"),
            (window.location.href = "/")
          )
        );
      })
      .catch((error) => {
        dispatch(RegisterFail(error.response.data.msg));
      });
  };
};
export const TokenInitiate = (token) => {
  return async function (dispatch) {
    dispatch(TokenStart());
    await axios
      .get("/user/infor", {
        headers: { Authorization: token },
      })
      .then((user) => {
        dispatch(
          TokenSuccess({
            user: user.data,
            isAdmin: user.data.role === 1 ? true : false,
            carts: user.data.cart,
          })
        );
      })
      .catch((error) => {
        dispatch(TokenFail(error));
      });
  };
};
export const LogoutInitiate = () => {
  return async function (dispatch) {
    dispatch(LogoutStart());
    await axios
      .get("/user/logout")
      .then((user) => {
        dispatch(
          LogoutSuccess(
            user,
            toast.success("Logout Success Thank You!"),
            localStorage.removeItem("firstLogin"),
            (window.location.href = "/login")
          )
        );
      })
      .catch((error) => {
        dispatch(LoginFail(error));
      });
  };
};
