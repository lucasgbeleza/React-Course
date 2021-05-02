import React, { Component } from "react";
import ExpenseItem from "./ExpenseItem";

class Expenses extends React.Component {
  render() {
    let data = this.props.dataApp;
    return (
      <div>
        {data.map((element) => (
          <div key={element.id}>
            <ExpenseItem
              title={element.title}
              amount={element.amount}
              date={element.date}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Expenses;
