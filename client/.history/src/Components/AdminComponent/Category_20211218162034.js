import React, { useContext } from "react";
import { GlobalState } from "../../Contexts/GlobalState";
import { CategoryStyle } from "../../Styles/StylePages/Admin/CategoryStyle";
const Category = () => {
  const { token } = useContext(GlobalState);
  const { category } = useSelector((state) => state.product);
  return (
    <>
      <CategoryStyle />
      <h1>Category</h1>
    </>
  );
};

export default Category;
