import React, { useContext, useState } from "react";
import { CheckoutStyle } from "../../Styles/StylePages/CheckoutStyle";
import { DataCheckout } from "../../utils/DataCheckout";
import { CheckoutItems } from "../../Imports/Index";
import { Link } from "react-router-dom";
import { GlobalState } from "../../Contexts/GlobalState";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  GetHistoryInitialState,
  GetPaymentInitialState,
} from "../../redux/Action/ActionProduct";
import axios from "axios";
const CheckOutItem = () => {
  const state = useContext(GlobalState);
  const { isAdmin } = useSelector((state) => state.data);
  // const { history } = useSelector((state) => state.product);
  const [history, setHistory] = state.UserApi.history;
  const dispatch = useDispatch();
  const [token] = state.token;
  // useEffect(() => {
  //   if (token) {
  //     if (isAdmin) {
  //       dispatch(GetPaymentInitialState(token));
  //     } else {
  //       dispatch(GetHistoryInitialState(token));
  //     }
  //   }
  // }, [token, isAdmin, history]);
  useEffect(() => {
    if (token) {
      // const getHistory = async () => {
      //   if (isAdmin) {
      //     // const res = await axios.get("/api/payment", {
      //     //   headers: { Authorization: token },
      //     // });
      //     // setHistory(res.data);
      //   } else {
      //     // dispatch(GetHistoryInitialState(token));
      //     const res = await axios.get("/user/history", {
      //       headers: { Authorization: token },
      //     });
      //     setHistory(res.data);
      //   }
      // };
      // getHistory();
      dispatch(GetHistoryInitialState(token));
    }
  }, [token, isAdmin]);
  console.log(history, "history");
  return (
    <>
      <CheckoutStyle>
        <div className="history-page">
          <h4>You have {history.length} ordered</h4>
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Payment ID</th>
                <th>Date of Purchased</th>
                <th>Action</th>
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
