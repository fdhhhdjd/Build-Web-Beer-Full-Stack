import React from "react";
import { useSelector } from "react-redux";
import LoadingAdmin from "../Loading/LoadingAdmin";
const UserRouteAdmin = ({ children, ...rest }) => {
  const { isAdmin } = useSelector((state) => state.data);
  console.log(isAdmin, "admin");
  return isAdmin ? children : <LoadingAdmin />;
};

export default UserRouteAdmin;
