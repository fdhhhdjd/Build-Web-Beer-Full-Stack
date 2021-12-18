import { createGlobalStyle } from "styled-components";
export const PanigationStyle = createGlobalStyle`
.pagination a {
  color: black;
  float: left;
  padding: 12px 18px;
  text-decoration: none;
  }
  .pagination a.active {
  background-color: dodgerblue;
  color: white;

  border-radius: 50%;
  }
  .pagination a:hover:not(.active) {
  background-color: #ddd;
  border-radius: 50%;
  }
  `;
