import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { TokenInitiate } from "../redux/Action/ActionAuth";
const UserApi = (token) => {
  const [cart, setCart] = useState([]);
  const [history, setHistory] = useState([]);
  const [name, setName] = useState();
  const dispatch = useDispatch();
  const { isLogout } = useSelector((state) => state.data);

  useEffect(() => {
    if (token) {
      dispatch(TokenInitiate(token));
    }
  }, [token]);
  const addCart = async (product) => {};
  return {
    cart: [cart, setCart],
    history: [history, setHistory],
  };
};
export default UserApi;
