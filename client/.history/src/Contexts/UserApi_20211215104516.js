import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { TokenInitiate } from "../redux/Action/ActionAuth";
import { Link, useNavigate } from "react-router-dom";
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
  // const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      dispatch(TokenInitiate(token));
    }
  }, [token]);
  // const addCart = async (product) => {
  //   if (!isLogout) {
  //     // return navigate("/"), toast.info("please login to continue buying...!!");
  //     return alert("Please login to continue buying");
  //   }
  //   const item = products.find((product) => product._id === product._id);
  //   const inCart = cart.find((item) =>
  //     item._id === product._id ? true : false
  //   );
  //   setCart([
  //     ...cart,
  //     inCart
  //       ? cart.map((item) =>
  //           item._id === product._id ? { ...item, qty: item.qty + 1 } : item
  //         )
  //       : [...cart, { ...item, qty: 1 }],
  //   ]);
  //   await axios.patch(
  //     "/user/addcart",
  //     { cart: [...cart, { ...product, qty: inCart }] },
  //     {
  //       headers: { Authorization: token },
  //     }
  //   );
  // };
  const addCart = async (product) => {
    if (!isLogged) return alert("Please login to continue buying");

    const check = cart.every((item) => {
      return item._id !== product._id;
    });

    if (check) {
      setCart([...cart, { ...product, quantity: 1 }]);

      await axios.patch(
        "/user/addcart",
        { cart: [...cart, { ...product, quantity: 1 }] },
        {
          headers: { Authorization: token },
        }
      );
    } else {
      alert("This product has been added to cart.");
    }
  };
  return {
    cart: [cart, setCart],
    history: [history, setHistory],
    addCart: addCart,
  };
};
export default UserApi;
