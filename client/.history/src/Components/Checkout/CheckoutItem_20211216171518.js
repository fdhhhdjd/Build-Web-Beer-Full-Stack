import React, { useState } from "react";
import { CheckoutStyle } from "../../Styles/StylePages/CheckoutStyle";
import { DataCheckout } from "../../utils/DataCheckout";
import { CheckoutItems } from "../../Imports/Index";
import { Link } from "react-router-dom";
const CheckOutItem = () => {
  const [history, setHistory] = useState(0);
  return (
    <>
      <CheckoutStyle>
        <div className="history-page">
          <h2>History</h2>

          <h4>You have {history.length} ordered</h4>

          <table>
            <thead>
              <tr>
                <th>Payment ID</th>
                <th>Date of Purchased</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* {history.map((items) => (
                <tr key={items._id}>
                  <td>{items.paymentID}</td>
                  <td>{new Date(items.createdAt).toLocaleDateString()}</td>
                  <td>
                    <Link to={`/history/${items._id}`}>View</Link>
                  </td>
                </tr>
              ))} */}
              <tr>
                <td>1</td>
                <td>31-05-2000</td>
                <td>
                  <Link to={`/history/${items._id}`}>View</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </CheckoutStyle>
    </>
  );
};

export default CheckOutItem;
