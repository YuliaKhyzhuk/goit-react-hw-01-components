import PropTypes from 'prop-types';
import { TransactionsContainer, TransactionsTable, TableHead, TableBody, TableRow, TransactionType, TransactionAmount, TransactionCurrency } from './TransactionHistory.styled';

export const Transactions = ({ items }) => {
  return (
    <TransactionsContainer>
      <TransactionsTable>
        <TableHead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </TableHead>
        <TableBody>
          {items.map(({ id, type, amount, currency }) => (
            <TableRow key={id}>
              <TransactionType>{type}</TransactionType>
              <TransactionAmount>{amount}</TransactionAmount>
              <TransactionCurrency>{currency}</TransactionCurrency>
            </TableRow>
          ))}
        </TableBody>
      </TransactionsTable>
    </TransactionsContainer>
  );
};

Transactions.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ).isRequired,
};
