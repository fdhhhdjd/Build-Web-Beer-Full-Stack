import React, { useContext, useState } from "react";
import { CheckoutStyle } from "../../Styles/StylePages/CheckoutStyle";
import { DataCheckout } from "../../utils/DataCheckout";
import { CheckoutItems } from "../../Imports/Index";
import { Link } from "react-router-dom";
import { GlobalState } from "../../Contexts/GlobalState";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetHistoryInitialState } from "../../redux/Action/ActionProduct";
const CheckOutItem = () => {
  const state = useContext(GlobalState);
  const { isAdmin } = useSelector((state) => state.data);
  const { history } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [token] = state.token;
  useEffect(() => {
    if (token) {
      dispatch(GetHistoryInitialState(token));
    }
  }, [token]);
  return (
    <>
      <CheckoutStyle>
        <div className="history-page">
          <h4>You have {history.length} ordered</h4>
          <table>
            <thead>
              <tr>
                <th>STT asdasd</th>
                <th>Payment ID</th>
                <th>Date of Purchased</th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {history.map((items, index) => (
                <tr key={items._id}>
                  <td>{index + 1}</td>
                  <td>{items.paymentID}</td>
                  <td>{new Date(items.createdAt).toLocaleDateString()}</td>
                  <td>
                    <Link to={`/history/${items._id}`}>View</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CheckoutStyle>
    </>
  );
};

export default CheckOutItem;
