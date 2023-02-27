import styled from 'styled-components';

export const TransactionsContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 16px;
  width: 320px;

  border-radius: ${props => props.theme.borderRadius.sm};
  background-color: ${props => props.theme.colors.backgroundGreen};

  box-shadow: ${props => {
    return ` 0 1px 3px ${props.theme.colors.secondaryAccent}`;
  }};

  transition: ${props => props.theme.transition};
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  @media (min-width: 768px) {
    width: 360px;
  }
  @media (min-width: 1280px) {
    width: 480px;
  }
`;

export const TransactionsTable = styled.table`
  padding: 12px;
  width: 100%;
  background-color: ${props => props.theme.colors.backgroundYellow};
  box-shadow: 0px 0px 10px 0px ${props => props.theme.colors.secondaryAccent};
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: ${props => props.theme.borderRadius.sm};
`;

export const TableHead = styled.thead`
  font-size: 20px;
`;

export const TableBody = styled.tbody`
  font-size: 15px;
`;

export const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: ${props => props.theme.colors.backgroundOrange};
  }
`;

export const TransactionType = styled.td`
  padding-left: 12px;
`;

export const TransactionAmount = styled.td`
  text-align: center;
`;

export const TransactionCurrency = styled.td`
  text-align: center;
`;
