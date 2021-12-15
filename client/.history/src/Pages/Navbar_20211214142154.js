import React, { useEffect, useState } from "react";
import { HeaderNavbar } from "../Styles/StylePages/Navbar";
import { Link, useLocation } from "react-router-dom";
import { FaPizzaSlice, FaShoppingCart } from "../Imports/Icons";
import { useDispatch, useSelector } from "react-redux";
import { LogoutInitiate } from "../redux/Action/ActionAuth";
const Navbar = () => {
  const [native, setNative] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const location = useLocation();
  const { users } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const handleNative = () => {
    setNative(!native);
  };
  const { isLogout } = useSelector((state) => state.data);
  const LogoutUser = () => {
    dispatch(LogoutInitiate());
  };
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab("Home");
    } else if (location.pathname === "/checkout") {
      setActiveTab("Checkout");
    } else if (location.pathname === "/product") {
      setActiveTab("Product");
    } else if (location.pathname === "/payment") {
      setActiveTab("Payment");
    } else if (location.pathname === "/feedback") {
      setActiveTab("Feedback");
    } else if (location.pathname === "/login") {
      setActiveTab("Login");
    }
  }, [location]);
  const loggedRouter = () => {
    return (
      <>
        <Link to="/" onClick={LogoutUser} className="a">
          Logout
        </Link>
      </>
    );
  };
  return (
    <>
      <HeaderNavbar>
        <header>
          <Link to="/">
            <div className="logo">
              <i className="fas fa-utensils"></i>BeerClub
            </div>
          </Link>

          <div id="menu-bar" onClick={handleNative}>
            <FaPizzaSlice />
          </div>
          <nav className={`navbar ${native ? "active" : ""}`}>
            <Link
              to="/"
              className={` a ${activeTab === "Home" ? " active1" : ""}`}
              onClick={() => setActiveTab("Home")}
            >
              Home
            </Link>
            <Link
              to="/checkout"
              className={` a ${activeTab === "Checkout" ? " active1" : ""}`}
              onClick={() => setActiveTab("Checkout")}
            >
              Checkout
            </Link>
            <Link
              to="/product"
              className={` a ${activeTab === "Product" ? " active1" : ""}`}
              onClick={() => setActiveTab("Product")}
            >
              Product
            </Link>
            <Link
              to="/payment"
              className={` a ${activeTab === "Payment" ? " active1" : ""}`}
              onClick={() => setActiveTab("Payment")}
            >
              Payment
            </Link>
            <Link
              to="/feedback"
              className={` a ${activeTab === "Feedback" ? " active1" : ""}`}
              onClick={() => setActiveTab("Feedback")}
            >
              Feedback
            </Link>
            <Link to="/profile" className="a">
              <span style={{ color: "red" }}>
                Hello: {users.length === 0 ? "Please Loign" : users.user.name}
              </span>
            </Link>
            <Link to="/payment" className="a">
              <FaShoppingCart style={{ fontSize: "24px" }} />
              &nbsp;&nbsp;
              <span class="badge badge-warning" id="lblCartCount">
                5
              </span>
            </Link>
            {isLogout ? (
              loggedRouter()
            ) : (
              <Link
                to="/Login"
                className={` a ${activeTab === " Login" ? " active1" : ""}`}
                onClick={() => setActiveTab("Login")}
              >
                Login
              </Link>
            )}
          </nav>
        </header>
      </HeaderNavbar>
    </>
  );
};

export default Navbar;
