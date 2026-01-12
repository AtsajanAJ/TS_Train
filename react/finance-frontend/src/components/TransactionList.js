export default function TransactionList(props) {

  const generateRows = () => {
    if(props.data != null) {
      return props.data.map( transaction => (
        <tr key={transaction.id} style={{ backgroundColor: transaction.type === "expense" ? "red" : "green" }}>
          <td>{transaction.created}</td>
          <td>{transaction.type}</td>
          <td>{transaction.amount}</td>
          <td>{transaction.note}</td>
        </tr>
      ))
    }
    else {
      return null;
    }
  }

  return(
    <table border="1">
      <thead>
      <tr>
        <th>Date-Time</th>
        <th>Type</th>
        <th>Amount</th>
        <th>Note</th>
      </tr>
      </thead>
      <tbody>{generateRows()}</tbody>
    </table>
  )
}