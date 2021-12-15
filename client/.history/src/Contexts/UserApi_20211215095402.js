import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { TokenInitiate } from "../redux/Action/ActionAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CartesianAxis } from "recharts";
const UserApi = (token) => {
  const [cart, setCart] = useState([]);
  const [history, setHistory] = useState([]);
  const [name, setName] = useState();
  const dispatch = useDispatch();
  const { isLogout } = useSelector((state) => state.data);
  const { product } = useSelector((state) => state.product);
  const products = product;
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
    const item = products.find((product) =>{
      product._id === product._id
    }
    const inCart = cart.find((item) => {
      item._id === product._id ? true : false;
    });
    setCart([
      ...cart,
      inCart
        ? cart.map((item) =>
            item._id === product._id ? { ...item, qty: item.qty + 1 } : item
          )
        : [...cart, { ...item, qty: 1 }],
    ]);
  };
  return {
    cart: [cart, setCart],
    history: [history, setHistory],
  };
};
export default UserApi;
