import React from "react";
import { Button } from "../../Styles/StylesComponent/Button";
const ButtonLoadMorePayment = ({
  css,
  name,
  id,
  href,
  loadmore,
  pages,
  currentPage,
  handleLoadMoreDe,
}) => {
  return (
    <>
      {currentPage < pages * 3 ? (
        <Button>
          <a href={href} target="_blank">
            <button className={css} id={id} onClick={loadmore}>
              {name}
            </button>
          </a>
        </Button>
      ) : (
        <Button>
          <a href={href} target="_blank">
            <button className={css} id={id} onClick={handleLoadMoreDe}>
              DeIncrement
            </button>
          </a>
        </Button>
      )}
    </>
  );
};

export default ButtonLoadMorePayment;
