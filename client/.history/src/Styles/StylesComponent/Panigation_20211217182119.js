import { createGlobalStyle } from "styled-components";
export const PanigationStyle = createGlobalStyle`
.pagination{
  text-align: center;
  margin-left:50rem;
  font-size:2rem;
}
.pagination li {
  color: black;
  float: left;
  padding: 15px 20px;
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
