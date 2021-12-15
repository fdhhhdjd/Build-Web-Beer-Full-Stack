import React from "react";
import { Link } from "react-router-dom";
const ProductItem = ({ product }) => {
  return (
    <>
      <Link to={`/products/${product.id}`}>
        <img src={product.images.url} alt="" />
      </Link>
    </>
  );
};

export default ProductItem;
