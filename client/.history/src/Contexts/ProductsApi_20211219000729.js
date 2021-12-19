import { useState, useEffect } from "react";
import axios from "axios";
import {
  GetAdminProductInitialState,
  GetProductInitialState,
} from "../redux/Action/ActionProduct";
import { TokenInitiate } from "../redux/Action/ActionAuth";
import { useDispatch, useSelector } from "react-redux";
const ProductApi = () => {
  const { product, results } = useSelector((state) => state.product);
  const [products, setProducts] = useState([]);
  const [callback, setCallback] = useState(false);
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [result, setResult] = useState(0);
  const [pageAdmin, setPageAdmin] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(
        `/api/products?limit=${
          page * 7
        }&${category}&${sort}&title[regex]=${search}`
      );
      setProducts(res.data.products);
      setResult(res.data.result);
    };
    getProducts();
  }, [callback, category, sort, search, page]);
  useEffect(() => {
    dispatch(GetProductInitialState(page, category, sort, search));
    setResult(results.result);
  }, [callback, page, category, sort, search]);
  useEffect(() => {
    dispatch(GetAdminProductInitialState(pageAdmin, category, sort, search));
  }, [callback, pageAdmin, category, sort, search]);
  return {
    products: [products, setProducts],
    callback: [callback, setCallback],
    category: [category, setCategory],
    sort: [sort, setSort],
    search: [search, setSearch],
    page: [page, setPage],
    result: [result, setResult],
  };
};

export default ProductApi;
