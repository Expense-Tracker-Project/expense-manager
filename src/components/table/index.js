import './style.css'

const Table = ( props ) => {
    const { data } = props
return (
    <div className='table-container'>
        <div className='table-title'>This Month's Expenses 💸</div>
        <div className='expense-table'>
    <table>
      <thead>
        <tr>
          <th className='date'>DATE</th>
          <th className='amount'>AMOUNT</th>
          <th className='reason'>REASON</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item, index) => (
          <tr key={index}>
            <td className='date'>{item.date}</td>
            <td className='amount'>{`₹ ${parseInt(item.amount).toLocaleString('en-IN')}`}</td>
            <td className='reason'>{`₹ ${item.reason}`}</td>
          </tr>
        ))}
      </tbody>
    </table>
        </div>
    </div>
)
}

export default Table;