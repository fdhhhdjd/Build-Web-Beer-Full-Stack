import React from "react";
import dataSpecialty from "../../utils/DataSpecialty";
import { Link } from "react-router-dom";
const SpecialtyItem = ({ item }) => {
  const { images, logo, title, description, content, price, _id } = item;
  return (
    <>
      <div className="box">
        <Link to={`/product/${_id}`}>
          <img className="image" src={images.url} alt="" />
          <div className="content">
            {dataSpecialty.map((item) => {
              return <img src={item.logo} alt="" key={item.id} />;
            })}
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SpecialtyItem;
