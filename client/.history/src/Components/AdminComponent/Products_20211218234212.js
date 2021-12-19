import { useState, useContext } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../utils/dummyData";
import { Link } from "react-router-dom";
import { ProductStyle } from "../../Styles/StylePages/ProductsAdminStyle";
import { useSelector } from "react-redux";
import { GlobalState } from "../../Contexts/GlobalState";
import axios from "axios";
const Products = () => {
  const state = useContext(GlobalState);
  const { productAdmin } = useSelector((state) => state.product);
  const [callback, setCallback] = state.productsApi.callback;
  const [loading, setLoading] = useState(false);
  const [token, setToken] = state.token;
  const [isCheck, setIsCheck] = useState(false);
  const handleDelete = async (id, public_id) => {
    try {
      setLoading(true);
      const destroyImg = axios.post(
        "/api/destroy",
        { public_id },
        {
          headers: { Authorization: token },
        }
      );
      const deleteProduct = axios.delete(`/api/products/${id}`, {
        headers: { Authorization: token },
      });

      await destroyImg;
      await deleteProduct;
      setCallback(!callback);
      setLoading(false);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  const checkAll = () => {
    productAdmin.forEach((product) => {
      product.checked = !isCheck;
    });
    setIsCheck(!isCheck);
  };
  const deleteAll = () => {
    productAdmin.forEach((product) => {
      if (product.checked) handleDelete(product._id, product.images.public_id);
    });
  };
  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    { field: "category", headerName: "Category", width: 160 },

    {
      field: "images",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img
              className="productListImg"
              src={params.row.images.url}
              alt=""
            />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "description", headerName: "Description", width: 250 },
    {
      field: "content",
      headerName: "Content",
      width: 450,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "createdAt",
      headerName: "CpreatedAt",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/products/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() =>
                handleDelete(params.row._id, params.row.images.public_id)
              }
            />
          </>
        );
      },
    },
  ];
  return (
    <>
      <ProductStyle />

      <div className="productList">
        <DeleteOutline className="productListDelete" />
        <DataGrid
          getRowId={(r) => r._id}
          rows={productAdmin}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          checkboxSelection={checkAll}
        />
      </div>
    </>
  );
};

export default Products;
