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
  };
  return {
    cart: [cart, setCart],
    history: [history, setHistory],
  };
};
export default UserApi;
