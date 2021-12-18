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
      <Button>
        <a href={href} target="_blank">
          <button className={css} id={id} onClick={loadmore}>
            {name}
          </button>
        </a>
      </Button>
    </>
  );
};

export default ButtonLoadMorePayment;
