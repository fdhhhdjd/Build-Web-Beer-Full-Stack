import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as types from "../ActionTypes";
export const GetUserAdminStart = () => ({
  type: types.GET_ADMIN_USER_START,
});
export const GetUserAdminSuccess = (api) => ({
  type: types.GET_ADMIN_USER_SUCCESS,
  payload: api,
});
export const GetUserAdminFail = (error) => ({
  type: types.GET_ADMIN_USER_FAIL,
  payload: error,
});

export const GetAdminUserInitiate = (token) => {
  return async function (dispatch) {
    dispatch(GetUserAdminStart());
    await axios
      .get("/user/getuser", {
        headers: { Authorization: token },
      })
      .then((user) => {
        dispatch(GetUserAdminSuccess(user));
      })
      .catch((error) => {
        dispatch(GetUserAdminFail(error));
      });
  };
};
