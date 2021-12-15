import React from "react";
import { PopularHome } from "../../Styles/StylePages/PopularHome";
import DataPopularHome from "../../utils/DataPopular";
import { PopularItem } from "../../Imports/Index";
import { useSelector } from "react-redux";
const Popular = () => {
  const { product } = useSelector((state) => state.product);
  return (
    <>
      <PopularHome>
        <section className="popular" id="popular">
          <h1 className="heading">
            most <span>popular</span> Beer
          </h1>
          <div className="box-container">
            {product.map((item) => (
              <PopularItem key={item.id} item={item} />
            ))}
          </div>
        </section>
      </PopularHome>
    </>
  );
};

export default Popular;
