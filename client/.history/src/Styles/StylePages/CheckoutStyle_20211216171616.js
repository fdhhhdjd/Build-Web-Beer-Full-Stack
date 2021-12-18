import styled from "styled-components";
import { mobile } from "../../Styles/StylePages/MobileReponsive";
import { Tablet } from "../../Styles/StylePages/TabletReponsive";
const img = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1978060/chien.png";
export const CheckoutStyle = styled.div`
  .history-page {
    overflow-x: auto;
  }
  .history-page h2,
  h4 {
    text-align: center;
    margin: 50px;
    text-transform: uppercase;
    letter-spacing: 1.2px;
  }
  .history-page table {
    margin: auto;
    width: 100%;
  }
  .history-page table,
  th,
  tr,
  td {
    border: 1px solid #ddd;
    border-collapse: collapse;
  }
  th,
  td {
    text-align: center;
    padding: 10px;
    text-transform: capitalize;
  }
  table a {
    color: rgb(3, 165, 206);
  }

  .history-page img {
    width: 70px;
    height: 100px;
    object-fit: cover;
  }
`;
