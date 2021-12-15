import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
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
  UserRouteAdmin,
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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
          <Route
            path="/admin"
            element={
              <UserRouteAdmin>
                <Admin />
              </UserRouteAdmin>
            }
          />
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
