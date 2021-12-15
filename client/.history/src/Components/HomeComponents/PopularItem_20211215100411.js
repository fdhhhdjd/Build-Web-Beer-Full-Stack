import React from "react";
import { GlobalState } from "../../Contexts/GlobalState";
import { Buttons } from "../../Imports/Index";
const PopularItem = ({ item }) => {
  const { price, title, images, sold } = item;
  const state = useContext(GlobalState);
  const addCart = state.userAPI.addCart;
  return (
    <>
      <div className="box">
        <span className="price">$ {price}</span>
        <img src={images.url} alt="" />
        <h3>{title}</h3>
        {/* <div className="stars">
          {Array(sold)
            .fill()
            .map((_, index) => (
              <i className="fas fa-star" key={index}></i>
            ))}
        </div> */}
        <Buttons css="btn" name="Add Cart" />
      </div>
    </>
  );
};

export default PopularItem;
