import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { HistoryStyle } from "../Styles/StylePages/HistoryStyle";
const OrderDetailsHistory = () => {
  const { history } = useSelector((state) => state.product);
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState([]);
  useEffect(() => {
    if (id) {
      history.forEach((item) => {
        if (item._id === id) {
          setOrderDetails(item);
        }
      });
    }
  }, [id, history]);
  console.log(history, "history");
  return (
    <>
      <HistoryStyle>
        <div className="history-page">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Postal Code</th>
                <th>Country Code</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {/* <td>{orderDetails.address.recipient_name}</td> */}
                <td>
                  {orderDetails.address.line1 +
                    " - " +
                    orderDetails.address.city}
                </td>
                <td>{orderDetails.address.postal_code}</td>
                <td>{orderDetails.address.country_code}</td>
              </tr>
            </tbody>
          </table>

          <table style={{ margin: "30px 0px" }}>
            <thead>
              <tr>
                <th></th>
                <th>Products</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {orderDetails.cart.map((item) => (
                <tr key={item._id}>
                  <td>
                    <img src={item.images.url} alt="" />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.quantity}</td>
                  <td>$ {item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </HistoryStyle>
    </>
  );
};

export default OrderDetailsHistory;
