import styled from "styled-components";
export const HistoryStyle = styled.div`
  .history-page {
    overflow-x: auto;
    margin-top: 10rem;
  }
  .history-page h2,
  h4 {
    text-align: center;
    margin: 10rem;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    font-size: 2rem;
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
    font-size: 2rem;
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
