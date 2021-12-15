import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

const LoadingAuthentication = () => {
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);

    count === 0 && navigate("/");
    return () => clearInterval(interval);
  }, [count, navigate]);
  return <Loading />;
};

export default LoadingAuthentication;
