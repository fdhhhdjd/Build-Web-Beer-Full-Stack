import React, { useContext, useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import { mobile } from "../../Styles/StylePages/MobileReponsive";
import { Tablet } from "../../Styles/StylePages/TabletReponsive";
import { CarEmpty, ButtonDelete, Paypal } from "../../Imports/Index";
import { useSelector } from "react-redux";
import { GlobalState } from "../../Contexts/GlobalState";
import { PanigationStyle } from "../../Styles/StylesComponent/Panigation";
import axios from "axios";
import swal from "sweetalert";
import LoadMore from "../Buttons/Loadmore";
const PaymentItem = () => {
  const state = useContext(GlobalState);
  const [cart, setCart] = state.UserApi.cart;
  const [token] = state.token;
  const [total, setTotal] = useState(0);
  const { users } = useSelector((state) => state.data);
  //
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(3);

  const [pageNumberLimit, setpageNumberLimit] = useState(3);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(3);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };
  const pages = [];
  for (let i = 1; i <= Math.ceil(cart.length / itemsPerPage); i++) {
    pages.push(i);
  }
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cart.slice(indexOfFirstItem, indexOfLastItem);
  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <>
          <li
            key={number}
            id={number}
            onClick={handleClick}
            className={currentPage == number ? "active" : null}
          >
            {number}
          </li>
        </>
      );
    } else {
      return null;
    }
  });
  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip;</li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}>&hellip;</li>;
  }

  const renderData = (data) => {
    return (
      <ul>
        {data.map((product, index) => {
          return (
            <Fragment key={index}>
              <Product>
                <ProductDetail>
                  <Image src={product.images.url} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {index + 1}
                    </ProductId>
                    <ProductColor color="red" />
                    <ProductSize>
                      <b>Sold:</b> {product.sold}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <h1 onClick={() => decrement(product._id)}>-</h1>
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <h1 onClick={() => increment(product._id)}>+</h1>
                  </ProductAmountContainer>
                  <ProductPrice>
                    <ButtonDelete
                      deletes={product._id}
                      title={product.title}
                      addToCart={addToCart}
                    />
                  </ProductPrice>
                  <ProductPrice>${product.price}</ProductPrice>
                </PriceDetail>
              </Product>
              <Hr />
            </Fragment>
          );
        })}
      </ul>
    );
  };
  const handleLoadMore = () => {
    setitemsPerPage(itemsPerPage + 5);
  };
  //
  useEffect(() => {
    const getTotal = () => {
      const total = cart.reduce((prev, item) => {
        console.log(prev, "prev");
        return prev + item.price * item.quantity;
      }, 0);
      setTotal(total);
    };
    getTotal();
  }, [cart]);
  const addToCart = async (cart) => {
    await axios.patch(
      "/user/addcart",
      { cart },
      {
        headers: { Authorization: token },
      }
    );
  };
  const increment = (id) => {
    cart.forEach((item) => {
      console.log(item, "forEach");
      if (item._id === id) {
        item.quantity += 1;
      }
    });

    setCart([...cart]);
    addToCart(cart);
  };
  const decrement = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.quantity === 1 ? (item.quantity = 1) : (item.quantity -= 1);
      }
    });

    setCart([...cart]);
    addToCart(cart);
  };
  const tranSuccess = async (payment) => {
    const { paymentID, address } = payment;

    await axios.post(
      "/api/payment",
      { cart, paymentID, address },
      {
        headers: { Authorization: token },
      }
    );

    setCart([]);
    addToCart([]);
    swal({
      title: "Thank you buy product SuccessFully ☑️",
      text: `Have a nice shopping day,Thank You ${users.user.name}`,
      icon: "success",
    });
    console.log(payment);
  };
  if (cart.length === 0) return <CarEmpty />;
  return (
    <>
      <Container>
        <Wrapper>
          <Title>YOUR BAG : {cart.length} Product</Title>
          <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
              <TopText>Shopping Bag({cart.length})</TopText>
              <TopText>Your Wishlist (0)</TopText>
            </TopTexts>
            <TopButton type="filled">CHECKOUT NOW</TopButton>
          </Top>
          <Bottom>
            <Info>{renderData(currentItems)}</Info>

            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$ {total.toFixed(2)}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>$ 5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>$ -5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>${total.toFixed(2)}</SummaryItemPrice>
              </SummaryItem>
              <Button>
                <Paypal total={total.toFixed(2)} tranSuccess={tranSuccess} />
              </Button>
            </Summary>
          </Bottom>
        </Wrapper>
      </Container>

      <PanigationStyle />
      <div className="pagination">
        <ul>
          <li>
            <button
              onClick={handlePrevbtn}
              disabled={currentPage == pages[0] ? true : false}
            >
              Prev
            </button>
          </li>

          {renderPageNumbers}
          {pageIncrementBtn}

          <li>
            <button
              onClick={handleNextbtn}
              disabled={currentPage == pages[pages.length - 1] ? true : false}
            >
              Next
            </button>
          </li>
        </ul>
      </div>
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
  background-color: #009cde;
  color: white;
  font-weight: 600;
`;
