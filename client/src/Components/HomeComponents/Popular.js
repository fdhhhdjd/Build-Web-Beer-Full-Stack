import React from "react";
import { PopularHome } from "../../Styles/StylePages/PopularHome";
import { PopularItem } from "../../Imports/Index";
import { useSelector } from "react-redux";
import { Buttons } from "../../Imports/Index";
import LoadMore from "../Buttons/Loadmore";
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
              <PopularItem key={item._id} item={item} />
            ))}
          </div>
          <h1 className="heading">
            <LoadMore css="btn" name="Load More" name1="eviction" />
          </h1>
        </section>
      </PopularHome>
    </>
  );
};

export default Popular;
