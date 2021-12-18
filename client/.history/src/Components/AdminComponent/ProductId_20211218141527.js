import React, { useState } from "react";
import { ProductIdStyle } from "../../Styles/StylePages/Admin/ProductIdStyle";
import { Publish } from "@material-ui/icons";
import { productData } from "../../utils/dummyData";
import { Link } from "react-router-dom";
import Chart from "../../Components/AdminComponent/Chart";
import Loading from "../Loading/Loading";
const ProductId = () => {
  const [images, setImages] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleUpload = () => {};
  const handleDestroy = () => {};
  const styleUpload = {
    display: images ? "block" : "none",
  };
  return (
    <>
      <ProductIdStyle />
      <div className="product">
        <div className="upload">
          <input type="file" name="file" id="file_up" onChange={handleUpload} />
          {loading ? (
            <div id="file_img">
              <Loading />
            </div>
          ) : (
            <div id="file_img" style={styleUpload}>
              <img
                src={
                  images
                    ? images.url
                    : "https://scontent.fdad3-3.fna.fbcdn.net/v/t1.6435-9/190801150_3047073538840591_1241117089856663372_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=tDDuzPnrvucAX-KCpEZ&_nc_ht=scontent.fdad3-3.fna&oh=00_AT8F33YbGG5xUd9Y_NWVwQqrr6_jpoGyJ0edlmAJQNLimg&oe=61E39C31"
                }
                alt=""
              />
              <span onClick={handleDestroy}>X</span>
            </div>
          )}
        </div>
        <div className="productTitleContainer">
          <h1 className="productTitle">Product</h1>
          <Link to="/newproduct">
            <button className="productAddButton">Create</button>
          </Link>
        </div>
        <div className="productTop">
          <div className="productTopLeft">
            <Chart
              data={productData}
              dataKey="Sales"
              title="Sales Performance"
            />
          </div>
          <div className="productTopRight">
            <div className="productInfoTop">
              <img
                src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="productInfoImg"
              />
              <span className="productName">Apple Airpods</span>
            </div>
            <div className="productInfoBottom">
              <div className="productInfoItem">
                <span className="productInfoKey">id:</span>
                <span className="productInfoValue">123</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">sales:</span>
                <span className="productInfoValue">5123</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">active:</span>
                <span className="productInfoValue">yes</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">in stock:</span>
                <span className="productInfoValue">no</span>
              </div>
            </div>
          </div>
        </div>
        <div className="productBottom">
          <form className="productForm">
            <div className="productFormLeft">
              <label>Product Name</label>
              <input type="text" placeholder="Apple AirPod" />
              <label>In Stock</label>
              <select name="inStock" id="idStock">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <label>Active</label>
              <select name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="productFormRight">
              <div className="productUpload">
                <img
                  src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                  className="productUploadImg"
                />
                <label for="file">
                  <Publish />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="productButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductId;
