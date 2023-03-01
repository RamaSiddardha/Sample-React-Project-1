import "./ExpenseDate.css"

function ExpenseDate(props) {
  let month = props.Date.toLocaleString("en-US", { month: "long" });
  let day = props.Date.toLocaleString("en-US", { day: "2-digit" });
  let year = props.Date.getFullYear();

  return (
    <div className="expense-date ">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
