import React from "react";
import { NewProductStyle } from "../../Styles/StylePages/Admin/NewProduct";
const NewProduct = () => {
  const [images, setImages] = useState(false);
  const styleUpload = {
    display: images ? "block" : "none",
  };
  return (
    <>
      <NewProductStyle />
      <div className="newProduct">
        <div className="create_product">
          <div className="upload">
            <input type="file" name="file" id="file_up" />

            <div id="file_img" style={styleUpload}>
              <img
                src="https://scontent.fdad3-3.fna.fbcdn.net/v/t1.6435-9/190801150_3047073538840591_1241117089856663372_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=tDDuzPnrvucAX-KCpEZ&_nc_ht=scontent.fdad3-3.fna&oh=00_AT8F33YbGG5xUd9Y_NWVwQqrr6_jpoGyJ0edlmAJQNLimg&oe=61E39C31"
                alt=""
              />
              <span>X</span>
            </div>
          </div>

          <form>
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
