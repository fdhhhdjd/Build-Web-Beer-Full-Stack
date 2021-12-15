import React from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingToRedirect from "../Loading/LoadingToRedirect";
const UserRoute = ({ children, ...rest }) => {
  const { users } = useSelector((state) => state.data);
  return users.user ? children : <LoadingToRedirect />;
};

export default UserRoute;
