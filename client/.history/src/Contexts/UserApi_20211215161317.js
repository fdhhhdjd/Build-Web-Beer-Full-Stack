import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { TokenInitiate } from "../redux/Action/ActionAuth";
import { toast } from "react-toastify";
import { CartesianAxis } from "recharts";
import swal from "sweetalert";
const UserApi = (token) => {
  const [cart, setCart] = useState([]);
  const [history, setHistory] = useState([]);
  const dispatch = useDispatch();
  const { isLogout, users } = useSelector((state) => state.data);
  const { product } = useSelector((state) => state.product);
  const products = product;

  useEffect(() => {
    if (token) {
      dispatch(TokenInitiate(token));
      const getUser = async () => {
        try {
          const res = await axios.get("/user/infor", {
            headers: { Authorization: token },
          });

          setCart(res.data.cart);
        } catch (err) {
          alert(err.response.data.msg);
        }
      };
      getUser();
    }
  }, [token]);
  const addCart = async (product) => {
    if (!isLogout) {
      swal({
        title: " Delete Product ?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          window.location.href = "/login";
          swal("Your delete product Successfully!", {
            icon: "success",
          });
        } else {
          swal("I don't have buy product 😟'!");
        }
      });
    }
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
      toast.success("Add Product successfully !!");
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