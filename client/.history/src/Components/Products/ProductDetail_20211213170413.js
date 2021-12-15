import React, { useState, useEffect } from "react";
import { ProductsDetail } from "../../Styles/StylePages/ProductsDetail";
import { image } from "../../utils/ImgDetail";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const ProductDetail = () => {
  const [select, setSelect] = useState();
  const [detailProduct, setDetailProduct] = useState([]);
  const { product } = useSelector((state) => state.product);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      product.forEach((product) => {
        console.log(product, "oke");
        if (product._id === id) setDetailProduct(product);
      });
    }
  }, [id, product]);
  if (detailProduct.length === 0) return null;
  return (
    <>
      <ProductsDetail>
        <div className="main-wrapper">
          <div className="container">
            <div className="product-div">
              <div className="product-div-left">
                <div className="img-container">
                  <img src={detailProduct.images.url} alt="watch" />
                </div>
                <div className="hover-container">
                  {/* <div>
                    <img
                      src={detailProduct.images.url}
                      style={{
                        border: select === item ? "3px solid orange" : "",
                      }}
                      onClick={() => setSelect(item)}
                    />
                  </div> */}
                </div>
              </div>
              <div className="product-div-right">
                <span className="product-name">(New) Beer Clup</span>
                <span className="product-price">$ {detailProduct.price}</span>
                <div className="product-rating">
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star"></i>
                  </span>
                  <span>
                    <i className="fas fa-star-half-alt"></i>
                  </span>
                  <span>(4.5 ratings)</span>
                </div>
                <p className="product-description">
                  {detailProduct.description}
                </p>
                <div className="btn-groups">
                  <button type="button" className="add-cart-btn">
                    <i className="fas fa-shopping-cart"></i>add to cart
                  </button>
                  <button type="button" className="buy-now-btn">
                    <i className="fas fa-wallet"></i>buy now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProductsDetail>
    </>
  );
};

export default ProductDetail;
