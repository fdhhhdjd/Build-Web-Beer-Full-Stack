import { createGlobalStyle } from "styled-components";
export const PanigationStyle = createGlobalStyle`
.checkout {
    display: flex;
    padding: 20px;
    background-color: white;
    height: max-content;
  }
  
  .checkout-ad {
    width: 100%;
    margin-bottom: 10px;
  }
  
  .checkout-title {
    margin-right: 10px;
    padding: 10px;
    border-bottom: 1px solid lightgray;
  }
  .button_comeback{
    background: #f0c14b;
    border: 1px solid;
    margin-top: 10px;
    width: 180px;
    color: #111;
    cursor: pointer;
    border-color: #a88734 #9c7e31 #846a29;
  }

   .pageNumbers {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content:center;
    
   }
 
  .pageNumbers li {
    padding: 10px;
    border: 1px solid white;
    cursor: pointer;
  }
    
  .pageNumbers li.active {
    background-color: white;
    color: black;
    border: 3px solid #f0c14b;
  }
 
  .pageNumbers li button {
    background: #f0c14b;
    border: 1px solid;
    margin-top: 10px;
    width: 80px;
    color: #111;
    cursor: pointer;
    border-color: #a88734 #9c7e31 #846a29;
  }
 
  
  .loadmore {
    background: #f0c14b;
    border: 1px solid;
    margin-top: 10px;
    width: 80px;
    color: #111;
    cursor: pointer;
    border-color: #a88734 #9c7e31 #846a29;
    cursor: pointer;
    margin-left: 35rem;
  }
  .number{
    color: red;
  }
  `;
