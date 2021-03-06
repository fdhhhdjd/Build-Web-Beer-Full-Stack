import axios from "axios";
import React, { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { GlobalState } from "../../Contexts/GlobalState";
import { CategoryStyle } from "../../Styles/StylePages/Admin/CategoryStyle";
import swal from "sweetalert";
const Category = () => {
  const state = useContext(GlobalState);
  const { categories } = useSelector((state) => state.product);
  const [token] = state.token;
  const [callback, setCallback] = state.UserApi.callback;
  const [category, setCategory] = useState("");
  const [onEdit, setOnEdit] = useState(false);
  const [id, setID] = useState("");
  const createCategory = async (e) => {
    e.preventDefault();
    try {
      if (onEdit) {
        const res = await axios.put(
          `/api/category/${id}`,
          { name: category },
          { headers: { Authorization: token } }
        );
        swal(`${res.data.msg} 🤩`);
      } else {
        const res = await axios.post(
          "/api/category",
          { name: category },
          {
            headers: { Authorization: token },
          }
        );
        swal(`${res.data.msg} 🤩`, {
          icon: "success",
        });
      }
      setOnEdit(false);
      setCategory("");
      setCallback(!callback);
    } catch (err) {
      swal(err.response.data.msg);
    }
  };

  const deleteCategory = async (id) => {
    try {
      if (window.confirm("Are you sure you want to delete")) {
        const res = await axios.delete(`/api/category/${id}`, {
          headers: { Authorization: token },
        });
        swal(`${res.data.msg} 😂`, {
          icon: "success",
        });
        setCallback(!callback);
      }
    } catch (err) {
      swal("Oh no lucky Thank you for 🥴!");
    }
  };
  const editCategory = async (id, name) => {
    setID(id);
    setCategory(name);
    setOnEdit(true);
  };
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
