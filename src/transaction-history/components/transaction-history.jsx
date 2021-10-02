import PropTypes from 'prop-types';
import style from './transaction.module.css'

export default function TransactionHistory({ items }) {
    return(
      <table className={style.transactionHistory}>
  <thead>
    <tr>
      <th className={style.tableTitle}>Type</th>
      <th className={style.tableTitle}>Amount</th>
      <th className={style.tableTitle}>Currency</th>
    </tr>
  </thead> 

  <tbody>
            {items.map((el) =>
    <tr className={style.tableRow} key={el.id}>
        <td>{el.type}</td>
        <td>{el.amount}</td>
        <td>{el.currency}</td>
    </tr>
    )}    
  </tbody>
</table>)
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    amount:PropTypes.string.isRequired,
    currency:PropTypes.string.isRequired
  })).isRequired
}



