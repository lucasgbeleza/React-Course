import React, {Component} from 'react'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

class ExpenseItem extends Component {
 render(){
     const title= this.props.title
     const amount = this.props.amount
     const date = this.props.date
        return (
            <div className="expense-item">
               <ExpenseDate date={date}/>
                <div className="expense-item__description">
                    <h2> {title} </h2>
                    <div className="expense-item__price"> ${ amount } </div>
                </div>
            </div>
        );
    }
}
export default ExpenseItem;