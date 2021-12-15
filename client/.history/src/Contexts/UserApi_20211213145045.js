import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { TokenInitiate } from "../redux/Action/ActionAuth";
const UserApi = (token) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [cart, setCart] = useState([]);
  const [history, setHistory] = useState([]);
  const [name, setName] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(TokenInitiate(token));
    }
  }, [token]);

  return {
    isLogged: [isLogged, setIsLogged],
    isAdmin: [isAdmin, setIsAdmin],
    cart: [cart, setCart],
    history: [history, setHistory],
  };
};
export default UserApi;
