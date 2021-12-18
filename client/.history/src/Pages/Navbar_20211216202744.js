import React, { useEffect, useState } from "react";
import { HeaderNavbar } from "../Styles/StylePages/Navbar";
import { Link, useLocation } from "react-router-dom";
import { FaPizzaSlice, FaShoppingCart } from "../Imports/Icons";
import { useDispatch, useSelector } from "react-redux";
import { LogoutInitiate } from "../redux/Action/ActionAuth";
import { useContext } from "react";
import { GlobalState } from "../Contexts/GlobalState";
const Navbar = () => {
  const [native, setNative] = useState(false);
  const state = useContext(GlobalState);
  const [activeTab, setActiveTab] = useState("Home");
  const location = useLocation();
  const { users } = useSelector((state) => state.data);
  const [cart] = state.UserApi.cart;
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
              <i className="fas fa-beer"></i>BeerClub
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
              to="/payment"
              className={` a ${activeTab === "Payment" ? " active1" : ""}`}
              onClick={() => setActiveTab("Payment")}
            >
              Payment
            </Link>
            <Link
              to="/history"
              className={` a ${activeTab === "Checkout" ? " active1" : ""}`}
              onClick={() => setActiveTab("Checkout")}
            >
              History
            </Link>
            <Link
              to="/feedback"
              className={` a ${activeTab === "Feedback" ? " active1" : ""}`}
              onClick={() => setActiveTab("Feedback")}
            >
              Feedback
            </Link>
            <a className="a">
              <span style={{ color: "red" }}>
                Hello: {users.length === 0 ? "Please Loign" : users.user.name}
              </span>
            </a>
            <Link to="/payment" className="a">
              <FaShoppingCart style={{ fontSize: "24px" }} />
              &nbsp;&nbsp;
              <span class="badge badge-warning" id="lblCartCount">
                {cart.length}
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
