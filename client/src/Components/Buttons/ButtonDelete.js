import React, { useContext } from "react";
import { GlobalState } from "../../Contexts/GlobalState";
import swal from "sweetalert";
const ButtonDelete = ({ deletes, title, addToCart }) => {
  const state = useContext(GlobalState);
  const [cart, setCart] = state.UserApi.cart;
  const removeProduct = (id) => {
    swal({
      title: " Delete Product ?",
      text: `Do you want to delete this product beer ${title}!`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        cart.forEach((item, index) => {
          if (item._id === id) {
            cart.splice(index, 1);
          }
        });
        swal("Your delete product Successfully!", {
          icon: "success",
        });
        setCart([...cart]);
        addToCart(cart);
      } else {
        swal("Oh no lucky Thank you for 🥴!");
      }
    });
  };
  return (
    <>
      <i
        class="fas fa-trash-alt"
        style={{ cursor: "pointer" }}
        onClick={() => removeProduct(deletes)}
      ></i>
    </>
  );
};

export default ButtonDelete;
