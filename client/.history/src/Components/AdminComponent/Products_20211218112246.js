import { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../utils/dummyData";
import { Link } from "react-router-dom";
import { ProductStyle } from "../../Styles/StylePages/ProductsAdminStyle";
import { DataGridPro } from "@mui/x-data-grid-pro";
import { useDemoData } from "@mui/x-data-grid-generator";
const Products = () => {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const { product } = useSelector((state) => state.product);
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 100000,
    editable: true,
  });
  return (
    <>
      <ProductStyle />
      <div style={{ height: 520, width: "100%" }}>
        <DataGridPro
          {...data}
          loading={data.rows.length === 0}
          rowHeight={38}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </>
  );
};

export default Products;
