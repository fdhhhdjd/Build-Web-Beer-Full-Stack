import { createGlobalStyle } from "styled-components";

export const CategoryStyle = createGlobalStyle`
.categories{
    max-width: 700px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 30px auto;
}
.categories form{
    width: 190px;
    margin-bottom: 20px;
}
.categories label{
    display: block;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 10px;
}
.categories input, button{
    height: 35px;
    border: none;
    outline: none;
    border-bottom: 1px solid #555;
}
.categories input{
    width: 210px;
}
.categories button{
    width: 70px;
    background: #555;
    color: white;
    margin-left: 10px;
}
.categories .row{
    min-width: 290px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
}
`;
