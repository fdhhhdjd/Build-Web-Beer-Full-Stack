import { createGlobalStyle } from "styled-components";

export const ProductStyle = createGlobalStyle`
.productList{
    flex: 4;
}

.productListItem{
    display: flex;
    align-items: center;
}

.productListImg {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  }

.productListEdit{
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #3bb077;
    color: white;
    cursor: pointer;
    margin-right: 20px;
}

.productListDelete{
    color: red;
    cursor: pointer;
}
`;
