import React from "react";
import { useNavigate } from "react-router-dom";

const LoadingToRedirect = () => {
  const [count, setCount] = useState(2);
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);

    count === 0 && navigate("/login");
    return () => clearInterval(interval);
  }, [count, history]);
  return <div></div>;
};

export default LoadingToRedirect;
