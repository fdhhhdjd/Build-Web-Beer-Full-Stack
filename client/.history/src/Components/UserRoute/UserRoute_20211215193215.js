import React from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";
const UserRoute = ({ children, ...rest }) => {
  const { users } = useSelector((state) => state.data);
  return users ? children : <Loading />;
};

export default UserRoute;
