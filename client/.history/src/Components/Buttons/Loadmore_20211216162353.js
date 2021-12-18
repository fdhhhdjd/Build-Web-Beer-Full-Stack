import React, { useContext } from "react";
import { GlobalState } from "../../Contexts/GlobalState";
import { Button } from "../../Styles/StylesComponent/Button";
const LoadMore = ({ css, name, name1, id, href, add, item }) => {
  const state = useContext(GlobalState);
  const [page, setPage] = state.page;
  const [result] = state.result;
  const LoadMoreIncremental = () => {
    setPage(page + 1);
  };
  const loadMoreDecremental = () => {
    setPage(page - 1);
  };
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
