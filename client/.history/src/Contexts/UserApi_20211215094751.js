import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { TokenInitiate } from "../redux/Action/ActionAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const UserApi = (token) => {
  const [cart, setCart] = useState([]);
  const [history, setHistory] = useState([]);
  const [name, setName] = useState();
  const dispatch = useDispatch();
  const { isLogout } = useSelector((state) => state.data);
  const navigator = useNavigate();
  useEffect(() => {
    if (token) {
      dispatch(TokenInitiate(token));
    }
  }, [token]);
  const addCart = async (product) => {
    if (!isLogout) {
      navigator("/");
      toast.info("please login to continue buying...!!");
    }
    const item = state.basket.find((product) => product._id === product._id);
    const inCart = state.cart.find((item) => {
      item._id === product._id ? true : false;
    });
    setCart([...cart,{cart.map((item) =>
      item.id === action.payload.id
        ? { ...item, qty: +action.payload.qty }
        : item
    ),}])
  };
  return {
    cart: [cart, setCart],
    history: [history, setHistory],
  };
};
export default UserApi;
