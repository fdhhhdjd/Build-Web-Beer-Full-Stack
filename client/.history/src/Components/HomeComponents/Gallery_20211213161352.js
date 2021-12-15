import React from "react";
import { GalleryItem } from "../../Imports/Index";
import DataGallery from "../../utils/DataGallery";
import { GalleryStyle } from "../../Styles/StylePages/GalleryStyle";
import { useSelector } from "react-redux";
const Gallery = () => {
  const { product } = useSelector((state) => state.product);
  return (
    <>
      <GalleryStyle>
        <section className="gallery" id="gallery">
          <h1 className="heading">
            our food <span> gallery </span>
          </h1>
          <div className="box-container">
            {product.map((item) => (
              <GalleryItem key={item.id} item={item} />
            ))}
          </div>
        </section>
      </GalleryStyle>
    </>
  );
};

export default Gallery;
