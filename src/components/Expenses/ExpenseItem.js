import { useState } from "react"; // import needed to use states -> useState is a React Hook
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // array destructuring: useState function will always return 2 values, first is the current value of the variable wanted, and the second is the function to set new values to it.
  const [title, setTitle] = useState(props.title);
  const amount = props.amount;
  const date = props.date;

  //  name convention: functions that are not used anywhere else and are related to event handles should have the event name + handler suffix
  // const clickHandler = () => {
  //     setTitle("Updated!!!");
  // };
  return (
    <Card className="expense-item">
      <ExpenseDate> dateItem = {date} </ExpenseDate>
      <div className="expense-item__description">
        <h2> {title} </h2>
        <div className="expense-item__price"> ${amount} </div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
};

export default ExpenseItem;
