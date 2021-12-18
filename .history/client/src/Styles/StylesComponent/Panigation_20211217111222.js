import { createGlobalStyle } from "styled-components";
export const PanigationStyle = createGlobalStyle`
.pagination li {
  color: black;
  float: left;
  padding: 12px 18px;
  text-decoration: none;
  }
  .pagination li.active {
  background-color: dodgerblue;
  color: white;

  border-radius: 50%;
  }
  .pagination li:hover:not(.active) {
  background-color: #ddd;
  border-radius: 50%;
  }
  `;
