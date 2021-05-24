import { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [formVisibility, setFormVisibility] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const newData = {
            id: ('e' + Math.random().toString()),
            ...enteredExpenseData,
        }
        props.onAddExpense(newData);
    }
   
    const startEditingHandler = () => {
        setFormVisibility(true)
    }

    const stopEditingHandler = () => {
        setFormVisibility(false)
    }
    
    return (
        <div className="new-expense">
            {!formVisibility && <button onClick={startEditingHandler}> Add new expense </button>}
            {formVisibility && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
        </div>
    )
}

export default NewExpense;