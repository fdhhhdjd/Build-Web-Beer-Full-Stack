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
  const { product, results } = useSelector((state) => state.product);
  const [products, setProducts] = useState([]);
  const [callback, setCallback] = useState(false);
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [result, setResult] = useState(0);
  const [pageAdmin, setPageAdmin] = useState(1);
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
  useEffect(() => {
    dispatch(GetProductInitialState(page, category, sort, search));
    setResult(results.result);
  }, [callback, page, category, sort, search]);
  useEffect(() => {
    dispatch(GetAdminProductInitialState(pageAdmin, category, sort, search));
  }, [callback, pageAdmin, category, sort, search]);
  const data = {
    token: [token, setToken],
    UserApi: UserApi(token),
    page: [page, setPage],
    result: [result, setResult],
    callback: [callback, setCallback],
  };
  return <GlobalState.Provider value={data}>{children}</GlobalState.Provider>;
};
