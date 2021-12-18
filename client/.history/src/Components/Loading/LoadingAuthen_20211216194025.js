import React from "react";
import { createGlobalStyle } from "styled-components";
const LoadingAuthen = () => {
  return (
    <>
      <ProductStyle />
      <span class="loader"></span>
    </>
  );
};

export default LoadingAuthen;
const ProductStyle = createGlobalStyle`
.loader {
  width: 32px;
  height: 72px;
  display: inline-block;
  left: 5px;
  position: relative;
  border: 2px solid #FFF;
  box-sizing: border-box;
  animation: animloader 2s linear infinite alternate;
  color: #5995fd;
  border-radius: 0 0 4px 4px;
  transform: perspective(140px) rotateX(-45deg);
}

@keyframes animloader {
  0% {
    box-shadow: 0 0  inset;
  }
  100% {
    box-shadow: 0 -70px inset;
  }
}


`;
