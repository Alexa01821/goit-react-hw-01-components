import { styled } from 'styled-components';

export const TransactionHistoryTable = styled.table`
  width: 100%;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
  overflow: auto;
  td,
  th {
    width: calc(100% / 3);
    text-align: center;
    border: 1px solid #ddd;
    padding: 8px;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  tr:hover {
    background-color: #ddd;
  }
  th {
    font-size: 20px;
    line-height: 1.28;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: capitalize;
    background-color: var(--color-grey);
    padding: 12px;
    color: white;
  }
`;
