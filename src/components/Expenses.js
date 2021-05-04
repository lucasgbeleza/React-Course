import React, { Component } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from './Card'
class Expenses extends React.Component {
  render() {
    let data = this.props.dataApp;
    return (
      <div>
        {data.map((element) => (
          <Card className="expenses" key={element.id}>
            <ExpenseItem
              title={element.title}
              amount={element.amount}
              date={element.date}
            />
          </Card>
        ))}
      </div>
    );
  }
}

export default Expenses;
