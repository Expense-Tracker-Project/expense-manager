import "./style.css";
import Bar from "../bar";

const Graph = (props) => {
  const allExpensesAreZero = props.data.every((item) => item.expense === 0);

  return (
    <>
      {allExpensesAreZero ? (
        <div>Welcome to ExpenseTrackr - <br/>Your Daily Expense Companion</div>
      ) : (
        <div className="graph-wrapper">
          {props?.data?.map((item, index) => (
            <Bar
              height={item.expense}
              title={item.month}
              key={index}
              className={`bar-${index}`}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Graph;
