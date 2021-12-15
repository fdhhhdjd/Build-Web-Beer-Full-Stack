import React from "react";
import { useSelector } from "react-redux";
import LoadingAdmin from "../Loading/LoadingAdmin";
const UserRouteAuth = ({ children, ...rest }) => {
  const { isAdmin } = useSelector((state) => state.data);
  return isAdmin ? children : <LoadingAdmin />;
};

export default UserRouteAuth;
