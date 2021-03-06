import React from "react";
import { Specialty } from "../../Styles/StylePages/Speciallty";

import { SpecialtyItem } from "../../Imports/Index";
import { useSelector } from "react-redux";
const Specialtys = () => {
  const { product } = useSelector((state) => state.product);
  console.log(product);
  return (
    <>
      <Specialty>
        <section className="speciality" id="speciality">
          <h1 className="heading">
            Click <span>Introduce Product</span>
          </h1>
          <div className="box-container">
            {product.map((item) => (
              <SpecialtyItem key={item._id} item={item} />
            ))}
          </div>
        </section>
      </Specialty>
    </>
  );
};

export default Specialtys;
