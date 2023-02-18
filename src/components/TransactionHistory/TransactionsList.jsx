import PropTypes from 'prop-types';
import { Table, TableTitle, TableItem } from './TransactionHistory.style';

export const TransactionList = ({ items }) => {
    return (
        <Table>
       <thead>
        <TableTitle>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TableTitle>
      </thead>

        <tbody>
        {items.map(item => (
          <TableItem key={item.id}>
            <td >{item.type}</td>
            <td >{item.amount}</td>
            <td >{item.currency}</td>
          </TableItem>
        ))}
      </tbody>
    </Table>
    );
};

TransactionList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
          currency: PropTypes.string.isRequired,
        })
      ),
}