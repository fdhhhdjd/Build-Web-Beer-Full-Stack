import React, { useState, useContext, useEffect } from "react";
import { GlobalState } from "../../Contexts/GlobalState";
import { NewProductStyle } from "../../Styles/StylePages/Admin/NewProduct";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";
const initialState = {
  product_id: "",
  title: "",
  price: 0,
  description: "",
  content: "",
  category: "",
  _id: "",
};
const NewProduct = () => {
  const [images, setImages] = useState(false);
  const state = useContext(GlobalState);
  const { productsAdmin } = useSelector((state) => state.product);
  const [onEdit, setOnEdit] = useState(false);
  const { isAdmin } = useSelector((state) => state.data);
  const [loading, setLoading] = useState(false);
  const [token] = state.token;
  const handleUpload = async () => {};
  const handleDestroy = async () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const styleUpload = {
    display: images ? "block" : "none",
  };
  return (
    <>
      <NewProductStyle />
      <div className="newProduct">
        <div className="create_product">
          <div className="upload">
            <input
              type="file"
              name="file"
              id="file_up"
              onChange={handleUpload}
            />
            {loading ? (
              <div id="file_img">
                <Loading />
              </div>
            ) : (
              <div id="file_img" style={styleUpload}>
                <img src={images ? images.url : ""} alt="" />
                <span onClick={handleDestroy}>X</span>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <label htmlFor="product_id">Product ID</label>
              <input type="text" name="product_id" id="product_id" required />
            </div>

            <div className="row">
              <label htmlFor="title">Title</label>
              <input type="text" name="title" id="title" required />
            </div>

            <div className="row">
              <label htmlFor="price">Price</label>
              <input type="number" name="price" id="price" required />
            </div>

            <div className="row">
              <label htmlFor="description">Description</label>
              <textarea
                type="text"
                name="description"
                id="description"
                required
                rows="5"
              />
            </div>

            <div className="row">
              <label htmlFor="content">Content</label>
              <textarea
                type="text"
                name="content"
                id="content"
                required
                rows="7"
              />
            </div>

            <div className="row">
              <label htmlFor="categories">Categories: </label>
            </div>

            <button type="submit"> Update</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewProduct;
