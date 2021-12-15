import React, { useEffect } from "react";
import { useSelector } from "react-redux";
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
} from "../Imports/Index";
const Home = () => {
  const { isAdmin } = useSelector((state) => state.data);
  useEffect(() => {
    if (isAdmin) {
      window.location.href("/admin");
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
    </>
  );
};

export default Home;
