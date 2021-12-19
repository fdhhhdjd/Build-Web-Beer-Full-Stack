import React, { useContext } from "react";
import { GlobalState } from "../../Contexts/GlobalState";
import { Button } from "../../Styles/StylesComponent/Button";
import { useSelector } from "react-redux";
import LoadingSmall from "../Loading/LoadingSmall";
const LoadMore = ({ css, name, name1, id, href, add, item }) => {
  const state = useContext(GlobalState);
  const [page, setPage] = state.productsApi.page;
  const [result] = state.productsApi.result;
  const { loading } = useSelector((state) => state.product);
  const LoadMoreIncremental = () => {
    setPage(page + 1);
  };
  const loadMoreDecremental = () => {
    setPage(page - 1);
  };

  if (loading) return <LoadingSmall />;
  return (
    <>
      <Button>
        {result < page * 9 ? (
          <a href={href} target="_blank">
            <button className={css} id={id} onClick={loadMoreDecremental}>
              {name1}
            </button>
          </a>
        ) : (
          <a href={href} target="_blank">
            <button className={css} id={id} onClick={LoadMoreIncremental}>
              {name}
            </button>
          </a>
        )}
      </Button>
    </>
  );
};

export default LoadMore;
