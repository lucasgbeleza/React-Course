import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const newData = {
            id: ('e' + Math.random().toString()),
            ...enteredExpenseData,
        }
        props.onAddExpense(newData);
    }
    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense;