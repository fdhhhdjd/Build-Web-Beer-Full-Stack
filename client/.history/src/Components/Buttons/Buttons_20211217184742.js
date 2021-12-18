import React from "react";
import { Button } from "../../Styles/StylesComponent/Button";
const Buttons = ({ css, name, id, href, add, item, loadmore }) => {
  return (
    <>
      <Button>
        <a href={href} target="_blank">
          <button
            className={css}
            id={id}
            onClick={
              (() => {
                add(item);
              },
              loadmore)
            }
          >
            {name}
          </button>
        </a>
      </Button>
    </>
  );
};

export default Buttons;
