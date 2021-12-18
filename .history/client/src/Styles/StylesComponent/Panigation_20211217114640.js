import { createGlobalStyle } from "styled-components";
export const PanigationStyle = createGlobalStyle`
.pagination{
 display: flex;
 justify-content:center;
 flex-direction:row;
}
.pagination li {
  color: black;
  padding: 12px 18px;
  text-decoration: none;
  list-style-type: none;
  margin-left: 2rem;
  
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
