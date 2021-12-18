import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { TokenInitiate } from "../redux/Action/ActionAuth";
import { toast } from "react-toastify";
import swal from "sweetalert";
import { GetAdminUserInitiate } from "../redux/Action/ActionAdmin";
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
      return swal({
        title: "Please login to purchase ?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal("navigation login Success, wait Loading... !", {
            icon: "success",
          });
          setTimeout(() => {
            window.location.href = "/login";
          }, 1500);
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
      swal("Every time you come in, you can buy more 😁").then((value) => {
        swal(`Thank You ${users.user.name} ❤️`);
      });
    }
  };
  // admin get user
  useEffect(() => {
    dispatch(GetAdminUserInitiate(token));
  }, [token]);

  return {
    cart: [cart, setCart],
    history: [history, setHistory],
    addCart: addCart,
  };
};
export default UserApi;
