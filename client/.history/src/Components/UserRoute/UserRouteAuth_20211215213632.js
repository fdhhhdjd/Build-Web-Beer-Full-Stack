import React from "react";
import { useSelector } from "react-redux";
import LoadingAuthentication from "../Loading/LoadingAuthentication";
const UserRouteAuth = ({ children, ...rest }) => {
  const { isLogout } = useSelector((state) => state.data);
  return !isLogout ? children : <LoadingAuthentication />;
};

export default UserRouteAuth;
