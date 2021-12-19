import React, { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { GlobalState } from "../../Contexts/GlobalState";
import { CategoryStyle } from "../../Styles/StylePages/Admin/CategoryStyle";
const Category = () => {
  const state = useContext(GlobalState);
  const { categories } = useSelector((state) => state.product);
  const [token] = state.token;
  const [category, setCategory] = useState("");
  const [onEdit, setOnEdit] = useState(false);
  const [id, setID] = useState("");
  const createCategory = () => {};
  const editCategory = () => {};
  return (
    <>
      <CategoryStyle />
      <div className="categories">
        <form onSubmit={createCategory}>
          <label htmlFor="category">Category</label>
          <input
            type="text"
            name="category"
            value={category}
            required
            onChange={(e) => setCategory(e.target.value)}
          />

          <button type="submit">{onEdit ? "Update" : "Create"}</button>
        </form>

        <div className="col">
          {categories.map((category) => (
            <div className="row" key={category._id}>
              <p>{category.name}</p>
              <div>
                <button
                  onClick={() => editCategory(category._id, category.name)}
                >
                  Edit
                </button>
                <button onClick={() => deleteCategory(category._id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
