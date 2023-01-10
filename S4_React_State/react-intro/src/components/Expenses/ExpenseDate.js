import "./ExpenseDate.css";

function ExpenseDate(props) {
  const dateString = {
    year: props.date.getFullYear() + "년",
    month: props.date.toLocaleString("ko-KR", { month: "long" }),
    day: props.date.toLocaleString("ko-KR", { day: "2-digit" }),
  };
  return (
    <div className="expense-date">
      <div className="year">{dateString.year}</div>
      <span>
        <div className="month">{dateString.month}</div>
        <div className="day">{dateString.day}</div>
      </span>
    </div>
  );
}

export default ExpenseDate;
