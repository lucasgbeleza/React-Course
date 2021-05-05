import React, {Component} from 'react'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import Card from '../UI/Card'

const ExpenseItem = (props) => {
     const title = props.title
     const amount = props.amount
     const date = props.date
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

export default ExpenseItem;