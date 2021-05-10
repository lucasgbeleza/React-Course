import {useState} from 'react';
import "./ExpenseForm.css";

const ExpenseForm = () => {

  // another way of declaring multiple states: 
  const [userInput, setUserInput] = useState({
    
  }) 

  useState('')
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate]= useState('')

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
  }

  return (
    <div>
      <form>
        <div className="new-expense__constrols">
          <div className="new-expense__control">
            <label for="titleNewExpense">Title</label>
            <input type="text" name="titleNewExpense" onChange={titleChangeHandler} />
          </div>

          <div className="new-expense__control">
            <label for="amountNewExpense">Amount</label>
            <input type="number" name="amountNewExpense" min="0.01" step="0.01" onChange={amountChangeHandler} />
          </div>

          <div className="new-expense__control">
            <label for="dateNewExpense">Date</label>
            <input type="date" name="dateNewExpense" min="2019-01-01" max="2022-12-31"/>
          </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
