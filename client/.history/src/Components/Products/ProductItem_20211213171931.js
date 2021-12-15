import React from "react";

const ProductItem = ({ product }) => {
  return (
    <>
      <img src={product.images.url} alt="" />
    </>
  );
};

export default ProductItem;
