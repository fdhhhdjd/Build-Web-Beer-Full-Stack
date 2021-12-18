import styled from "styled-components";
export const HistoryStyle = styled.div`
  .history-page {
    overflow-x: auto;
  }
  .history-page h2,
  h4 {
    text-align: center;
    margin: 20px;
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
