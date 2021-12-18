import { createGlobalStyle } from "styled-components";

export const ProductIdStyle = createGlobalStyle`
.product {
    flex: 4;
    padding: 20px;
  }
  
  .productTitleContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .productAddButton {
    width: 80px;
    border: none;
    padding: 5px;
    background-color: teal;
    color: white;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .productTop {
    display: flex;
  }
  
  .productTopLeft,
  .productTopRight {
    flex: 1;
  }
  
  .productTopRight {
    padding: 20px;
    margin: 20px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  }
  
  .productInfoImg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
  }
  
  .productInfoTop {
    display: flex;
    align-items: center;
  }
  
  .productName {
    font-weight: 600;
  }
  
  .productInfoBottom {
    margin-top: 10px;
  }
  
  .productInfoItem {
    width: 150px;
    display: flex;
    justify-content: space-between;
  }
  
  .productInfoValue {
    font-weight: 300;
  }
  
  .productBottom {
    padding: 20px;
    margin: 20px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  }
  
  .productForm {
    display: flex;
    justify-content: space-between;
  }
  
  .productFormLeft {
    display: flex;
    flex-direction: column;
  }
  
  .productFormLeft > label {
    margin-bottom: 10px;
    color: gray;
  }
  
  .productFormLeft > input {
    margin-bottom: 10px;
    border: none;
    padding: 5px;
    border-bottom: 1px solid gray;
  }
  
  .productFormLeft >select{
    margin-bottom: 10px;
  }
  
  .productUploadImg{
    width: 100px;
    height: 100px;
    border-radius: 10px;
    object-fit: cover;
    margin-right: 20px;
  }
  
  .productFormRight{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  
  .productUpload{
    display: flex;
    align-items: center;
  }
  
  .productButton{
    border: none;
    padding: 5px;
    border-radius: 5px;
    background-color: darkblue;
    color:white;
    font-weight: 600;
    cursor: pointer;
  }
  //
  .create_product{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
}
.upload{
    max-width: 450px;
    height: 500px;
    width: 100%;
    border: 1px solid #ddd;
    padding: 15px;
    margin: 20px;
    position: relative;
}
#file_up{
    position: relative;
    width: 100%;
    height: 100%;
    outline: none;
}
#file_up::before{
    content: "+";
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    left: 0;
    background: white;
    color: rgb(250, 200, 107);
    font-size: 17rem;
    text-align: center;
    cursor: pointer;
    margin: auto;
}
#file_img{
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left: 0;
    background: white;
}
#file_img img{
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
}
#file_img span{
    position: absolute;
    top: -13px;
    right: -13px;
    background: white;
    border: 1px solid #ddd;
    border-radius: 50%;
    padding: 6px 10px;
    cursor: pointer;
    font-weight: 900;
    color: crimson;
}

.create_product form{
    max-width: 500px;
    min-width: 290px;
    width: 100%;
    margin: 15px 30px;
}
.create_product form .row{
    width: 100%;
    margin: 15px 0;
}
.create_product form input, textarea{
    width: 100%;
    min-height: 40px;
    padding: 0 5px;
}
.create_product form button{
    width: 200px;
    height: 40px;
    background: #555;
    color: white;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
}
`;
