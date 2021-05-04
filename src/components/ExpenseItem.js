import React, {Component} from 'react'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import Card from './Card'

class ExpenseItem extends Component {
 render(){
     const title = this.props.title
     const amount = this.props.amount
     const date = this.props.date
        return (
            <Card className="expense-item">
               <ExpenseDate> dateItem = {date} </ExpenseDate>
                <div className="expense-item__description">
                    <h2> {title} </h2>
                    <div className="expense-item__price"> ${ amount } </div>
                </div>
            </Card>
        );
    }
}
export default ExpenseItem;