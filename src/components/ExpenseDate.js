import React, { Component } from "react";

class ExpenseDate extends Component {
  render() {
    const dateItem = this.props.children[1];

    const month = dateItem.toLocaleString("en-US", { month: "long" });
    const day = dateItem.toLocaleString("en-US", { day: "2-digit" });
    const year = dateItem.toLocaleString("en-US", {year: "numeric"})

    return (
      <div className="expense-date">
        <div className="enpense-date__day" >{day}</div>
        <div className="enpense-date__month" >{month}</div>
        <div className="enpense-date__year" >{year}</div>
      </div>
    );
  }
}
export default ExpenseDate;
