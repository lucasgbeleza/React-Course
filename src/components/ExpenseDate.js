import React, { Component } from "react";

class ExpenseDate extends Component {
  render() {
    const dateItem = this.props.children[1];

    const month = dateItem.toLocaleString("en-US", { month: "long" });
    const day = dateItem.toLocaleString("en-US", { day: "2-digit" });
    const year = dateItem.toLocaleString("en-US", {year: "numeric"})

    return (
      <div>
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
      </div>
    );
  }
}
export default ExpenseDate;
