import React from "react";
import { GlobalState } from "../../Contexts/GlobalState";
import swal from "sweetalert";
const ButtonDelete = ({delete}) => {
  const state = useContext(GlobalState);
  const [cart] = state.UserApi.cart;
  const removeProduct = (id) => {
    if (window.confirm("Do you want to delete this product ?")) {
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });
      // swal({
      //   title: " ?",
      //   text: `Do you want to delete this product beer ${}!`,
      //   icon: "warning",
      //   buttons: true,
      //   dangerMode: true,
      // })
      // .then((willDelete) => {
      //   if (willDelete) {
      //     swal("Poof! Your imaginary file has been deleted!", {
      //       icon: "success",
      //     });
      //   } else {
      //     swal("Your imaginary file is safe!");
      //   }
      // });

      setCart([...cart]);
      addToCart(cart);
    }
  };
  return (
    <>
      <i
        class="fas fa-trash-alt"
        style={{ cursor: "pointer" }}
        onClick={() => removeProduct(delete)}
      ></i>
    </>
  );
};

export default ButtonDelete;
