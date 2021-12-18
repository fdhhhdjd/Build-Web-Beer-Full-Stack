import React from "react";
import { CheckoutStyle } from "../../Styles/StylePages/CheckoutStyle";
import { DataCheckout } from "../../utils/DataCheckout";
import { CheckoutItems } from "../../Imports/Index";
const CheckOutItem = () => {
  return (
    <>
      <CheckoutStyle>
        <div id="wrapper">
          <div className="container1">
            <div className="order">
              <h2>Your order summary</h2>
              {DataCheckout.map((item, index) => {
                return <CheckoutItems key={index} item={item} />;
              })}
              <h4 className="ship">Shipping: FREE</h4>
              <hr />
              <h3 className="total">TOTAL: 60.91€</h3>
            </div>
          </div>
        </div>
      </CheckoutStyle>
    </>
  );
};

export default CheckOutItem;
