import './style.css'

const Table = ( props ) => {
    const { data } = props;
    const monthsMap = {
      '0': 'January',
      '1': 'February',
      '2': 'March',
      '3': 'April',
      '4': 'May',
      '5': 'June',
      '6': 'July',
      '7': 'August',
      '8': 'September',
      '9': 'October',
      '10': 'November',
      '11': 'December'
    }
return (
 <div className='table-container'>
{        data?.tableData?.length === 0 ?
   <div className='empty-table'>
    <span>No expense added 🤑 for the month of {monthsMap[props.month]}</span>
   </div>

   :
        <div className='expense-table'>
          <div className='month'>{monthsMap[props.month]}</div>
    <table>
      <thead>
        <tr>
          <th className='date'>DATE</th>
          <th className='amount'>AMOUNT</th>
          <th className='reason'>REASON</th>
        </tr>
      </thead>
      <tbody>
        {data?.tableData?.map((item, index) => (
          <tr key={index}>
            <td className='date'>{item.date}</td>
            <td className='amount'>{`₹ ${parseInt(item.amount).toLocaleString('en-IN')}`}</td>
            <td className='reason'>{item.reason}</td>
          </tr>
        ))}
      </tbody>
    </table>
        </div>}
    </div>
)
}

export default Table;