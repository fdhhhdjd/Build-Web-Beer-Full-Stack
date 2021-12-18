import React, { useContext } from "react";
import { useState } from "react";
import { GlobalState } from "../../Contexts/GlobalState";
import { Button } from "../../Styles/StylesComponent/Button";
import LoadingSmall from "../Loading/LoadingSmall";
const LoadMore = ({ css, name, name1, id, href, add, item }) => {
  const state = useContext(GlobalState);
  const [page, setPage] = state.page;
  const [result] = state.result;
  const [loading, setLoading] = useState(false);
  const LoadMoreIncremental = () => {
    setPage(page + 1);
    setLoading(true);
  };
  const loadMoreDecremental = () => {
    setLoading(true);
    setPage(page - 1);
    setLoading(false);
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
