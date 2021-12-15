import React from "react";
import { Buttons } from "../../Imports/Index";
const GalleryItem = ({ item }) => {
  const { images, title, description } = item;
  return (
    <>
      <div className="box">
        <img src={images.url} alt="" />
        <div className="content">
          <h3>{title}</h3>
          <p>{description}</p>
          <Buttons css="btn" name="ordern now" />
        </div>
      </div>
    </>
  );
};

export default GalleryItem;
