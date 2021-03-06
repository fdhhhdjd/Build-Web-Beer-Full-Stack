import React from "react";
import { Link } from "react-router-dom";
const ProductItem = ({ product }) => {
  return (
    <>
      <Link to={`/product/${product._id}`}>
        <img
          src={product.images.url}
          alt=""
          style={{ border: "3px solid orange" }}
        />
      </Link>
    </>
  );
};

export default ProductItem;
