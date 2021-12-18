import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GlobalStyle } from "../GlobalStyle";
import {
  Specialty,
  Content,
  Popular,
  Navbar,
  StepContainer,
  Gallery,
  Footer,
  ScrollTop,
  Loading,
  LoadingSmall,
} from "../Imports/Index";
const Home = () => {
  const { isAdmin } = useSelector((state) => state.data);
  const { product } = useSelector((state) => state.product);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAdmin) {
      navigate("/admin");
    }
  }, [isAdmin]);
  return (
    <>
      <ScrollTop />
      <GlobalStyle />
      <Navbar />
      <Content />
      <Specialty />
      <Popular />
      <StepContainer />
      <Gallery />
      <Footer />
      {product.length === 0 && <LoadingSmall />}
    </>
  );
};

export default Home;
