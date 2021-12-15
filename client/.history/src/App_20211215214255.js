import React, { Suspense, useContext, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  NotFound,
  Loading,
  UserLists,
  Rating,
  ProductsAdmin,
  Users,
  NewUsers,
  ProductIds,
  NewProducts,
  ManagerAdmins,
} from "./Imports/Index";
import {
  Home,
  FeedBack,
  ProductDetails,
  Authentication,
  Forget,
  Payment,
  Checkout,
  Admin,
} from "./Imports/LazyRouter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { UserRoute, UserRouteAuth } from "./Imports/Index";
function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <UserRouteAuth>
                <Authentication />
              </UserRouteAuth>
            }
          />
          <Route
            path="/forget"
            element={
              <UserRouteAuth>
                <Forget />
              </UserRouteAuth>
            }
          />
          <Route
            path="/feedback"
            element={
              <UserRoute>
                <FeedBack />
              </UserRoute>
            }
          />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route
            path="/payment"
            element={
              <UserRoute>
                <Payment />
              </UserRoute>
            }
          />
          <Route
            path="/history"
            element={
              <UserRoute>
                <Checkout />
              </UserRoute>
            }
          />
          <Route path="/rating" element={<Rating />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/users" element={<UserLists />} />
          <Route path="/user/:userId" element={<Users />} />
          <Route path="/newUser" element={<NewUsers />} />
          <Route path="/products" element={<ProductsAdmin />} />
          <Route path="/product/:productId" element={<ProductIds />} />
          <Route path="/newproduct" element={<NewProducts />} />
          <Route path="/profileAdmin" element={<ManagerAdmins />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;