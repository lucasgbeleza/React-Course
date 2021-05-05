import './ExpenseDate.css';

const ExpenseDate = (props) => {
    const dateItem = props.children[1];

    const month = dateItem.toLocaleString("en-US", { month: "long" });
    const day = dateItem.toLocaleString("en-US", { day: "2-digit" });
    const year = dateItem.toLocaleString("en-US", {year: "numeric"})

    return (
      <div className="expense-date">
        <div className="expense-date__month" >{month}</div>
        <div className="expense-date__day" >{day}</div>
        <div className="expense-date__year" >{year}</div>
      </div>
    );
  }

export default ExpenseDate;
