import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { GlobalState } from "../../Contexts/GlobalState";
import { CategoryStyle } from "../../Styles/StylePages/Admin/CategoryStyle";
const Category = () => {
  const { token } = useContext(GlobalState);
  const { categories } = useSelector((state) => state.product);
  const [token] = state.token;
  const [category, setCategory] = useState("");
  return (
    <>
      <CategoryStyle />
      <h1>Category</h1>
    </>
  );
};

export default Category;
