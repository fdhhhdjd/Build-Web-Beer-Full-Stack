import React, { useContext } from "react";
import { GlobalState } from "../../Contexts/GlobalState";
import { Button } from "../../Styles/StylesComponent/Button";
const LoadMore = ({ css, name, name1, id, href, add, item }) => {
  const state = useContext(GlobalState);
  const [page, setPage] = state.page;
  const [result] = state.result;

  return (
    <>
      <Button>
        {result < page * 9 ? (
          <a href={href} target="_blank">
            <button className={css} id={id} onClick={() => setPage(page - 1)}>
              {name1}
            </button>
          </a>
        ) : (
          <a href={href} target="_blank">
            <button className={css} id={id} onClick={() => setPage(page + 1)}>
              {name}
            </button>
          </a>
        )}
      </Button>
    </>
  );
};

export default LoadMore;
