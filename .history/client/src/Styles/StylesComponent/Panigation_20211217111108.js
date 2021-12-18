import { createGlobalStyle } from "styled-components";
export const PanigationStyle = createGlobalStyle`
.pagination a {
  color: black;

  padding: 12px 18px;
  text-decoration: none;
  }
  /* set the style for the active class */
  .pagination a.active {
  background-color: dodgerblue;
  color: white;
  /*Circle Design with CSS*/
  border-radius: 50%;
  }
  /* add background color when user hovers on inactive class */
  .pagination a:hover:not(.active) {
  background-color: #ddd;
  border-radius: 50%;
  }
  `;
