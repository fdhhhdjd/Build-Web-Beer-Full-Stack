import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { TokenInitiate } from "../redux/Action/ActionAuth";
import UserApi from "./UserApi";
import {
  GetAdminProductInitialState,
  GetProductInitialState,
} from "../redux/Action/ActionProduct";
export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      const refreshToken = async () => {
        const res = await axios.get("/user/refresh_token");
        setToken(res.data.accesstoken);
        setTimeout(() => {
          refreshToken();
        }, 10 * 60 * 1000);
      };
      refreshToken();
    }
  }, []);

  const data = {
    token: [token, setToken],
    UserApi: UserApi(token),
    page: [page, setPage],
    result: [result, setResult],
    productsApi: ProductApi(),
  };
  return <GlobalState.Provider value={data}>{children}</GlobalState.Provider>;
};
