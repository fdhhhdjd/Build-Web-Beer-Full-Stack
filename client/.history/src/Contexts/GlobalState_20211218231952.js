import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

import UserApi from "./UserApi";
import ProductApi from "./ProductsApi";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false);
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
    productsApi: ProductApi(),
  };
  return <GlobalState.Provider value={data}>{children}</GlobalState.Provider>;
};
