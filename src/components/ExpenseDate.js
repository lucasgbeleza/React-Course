import React, { Component } from "react";

class ExpenseDate extends Component {
  render() {
    const date = this.props;

    const month = date.toLocaleString("en-US", { month: "long" });
    const day = date.toLocaleString("en-US", { day: "2-digit" });
    const year = date.getFullYear();

    return (
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
    );
  }
}
export default ExpenseDate;
