import { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [formVisibility, setFormVisibility] = useState('false')

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const newData = {
            id: ('e' + Math.random().toString()),
            ...enteredExpenseData,
        }
        props.onAddExpense(newData);
    }
    let showForm = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    const teste = () => {
        if(formVisibility == "true"){
            showForm = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} visible/>
        } else {
            showForm = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} hidden/>
        }
    }
    
    return (
        <div className="new-expense">
            <div>{showForm}</div>
            <button className="new-expense" onClick={teste}> Add new expense </button>
        </div>
    )
}

export default NewExpense;