import React from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingToRedirect from "../Loading/LoadingToRedirect";
const UserRoute = ({ children, ...rest }) => {
  const { isLogout } = useSelector((state) => state.data);
  return !isLogout ? children : <LoadingToRedirect />;
};

export default UserRoute;
