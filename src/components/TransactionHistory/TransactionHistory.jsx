import React from 'react';
import { TransactionHistoryTable } from './TransactionHistoryStyled';

export const TransactionHistory = ({ transactionsList }) => {
  return (
    <TransactionHistoryTable>
      <thead className='table-header'>
        <tr className='table-header-row'>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className='table-body'>
        {transactionsList.map(({ id, type, amount, currency }) => {
          return (
            <tr className='table-body-row' key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </TransactionHistoryTable>
  );
};
