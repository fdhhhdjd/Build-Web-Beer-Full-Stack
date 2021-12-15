import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { mobile } from "../../Styles/StylePages/MobileReponsive";
import { Tablet } from "../../Styles/StylePages/TabletReponsive";
import { Img, Img1 } from "../../Imports/Image";
import StripeCheckout from "react-stripe-checkout";
import { EmptyCart } from "../../Imports/Index";
import { useSelector } from "react-redux";
import { GlobalState } from "../../Contexts/GlobalState";
import axios from "axios";
import CarEmpty from "../EmptyCart/EmptyCart";
const PaymentItem = () => {
  const state = useContext(GlobalState);
  const [cart, setCart] = state.UserApi.cart;
  const [token] = state.token;
  const [total, setTotal] = useState(0);
  const { CartUser } = useSelector((state) => state.data);
  // useEffect(() => {
  //   const getTotal = () => {
  //     const total = cart.reduce((prev, item) => {
  //       console.log(prev, "prev");
  //       return prev + item.price * item.quantity;
  //     }, 0);
  //     setTotal(total);
  //   };
  //   getTotal();
  // }, [cart]);
  const addToCart = async (cart) => {
    await axios.patch(
      "/user/addcart",
      { cart },
      {
        headers: { Authorization: token },
      }
    );
  };
  // const increment = (id) => {
  //   cart.forEach((item) => {
  //     console.log(item, "forEach");
  //     if (item._id === id) {
  //       item.quantity += 1;
  //     }
  //   });

  //   setCart([...cart]);
  //   addToCart(cart);
  // };
  // const decrement = (id) => {
  //   cart.forEach((item) => {
  //     if (item._id === id) {
  //       item.quantity === 1 ? (item.quantity = 1) : (item.quantity -= 1);
  //     }
  //   });

  //   setCart([...cart]);
  //   addToCart(cart);
  // };
  // if (cart.length === 0) return <CarEmpty />;
  return (
    <>
      <Container>
        {cart.map((product) => (
          <div className="detail cart" key={product._id}>
            <img src={product.images.url} alt="" />

            <div className="box-detail">
              <h2>{product.title}</h2>

              <h3>$ {product.price * product.quantity}</h3>
              <p>{product.description}</p>
              <p>{product.content}</p>

              <div className="amount">
                <button> - </button>
                <span>{product.quantity}</span>
                <button> + </button>
              </div>

              <div
                className="delete"
                onClick={() => removeProduct(product._id)}
              >
                X
              </div>
            </div>
          </div>
        ))}
      </Container>
    </>
  );
};

export default PaymentItem;
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  margin: 60px 0 30px 0;
  font-size: 1.7rem;
  ${mobile({ padding: "10px", fontSize: "1.5rem" })}
  ${mobile({ marginTop: "80px" })};
  ${Tablet({ padding: "10px", fontSize: "1.5rem" })}
  ${Tablet({ margin: "90px 0 50px 0" })};
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid black;
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
  ${Tablet({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
  ${Tablet({ margin: "15px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
  ${Tablet({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  margin: 0 0 1rem 0;
  background-color: #eee;
  border: none;
  height: 5px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgrey;
  border-radius: 10px;
  padding: 20px;
  height: 60vh;
  ${Tablet({ padding: "20px", height: "40vh" })}
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;
