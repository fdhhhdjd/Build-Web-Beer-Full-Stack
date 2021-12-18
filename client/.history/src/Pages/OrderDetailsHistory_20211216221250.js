import React from "react";
import { GlobalStyle } from "../GlobalStyle";
import { Navbar, Footer, CheckoutItem, ScrollTop } from "../Imports/Index";
const OrderDetailsHistory = () => {
  return (
    <>
      <ScrollTop />
      <GlobalStyle />
      <Navbar />
      <PageHistory />
    </>
  );
};

export default OrderDetailsHistory;
