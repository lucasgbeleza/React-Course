import {useState} from 'react';
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  /*
  // START of another way of declaring multiple states: 
  const [userInput, setUserInput] = useState({
     enteredTitle: '',
     enteredAmount: '',
     enteredDate: ''
  }) 

  const titleChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // })

    // correct way -> passing a function to deal with React lifecycles
    setUserInput((prevState) => {
      return {...prevState, enteredTitle: event.target.value}
    });
  }

  const amountChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value
    // })

    // correct way -> passing a function to deal with React lifecycles
    setUserInput((prevState) => {
      return {...prevState, enteredAmount: event.target.value}
    });
  }

  const dateChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value
    // })

    // correct way -> passing a function to deal with React lifecycles
    setUserInput((prevState) => {
      return {...prevState, enteredDate: event.target.value}
    })

  }
  // END one state use for multiple itens

  */
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

  const clearInputFields = () => {
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: parseFloat(enteredAmount),
      date: new Date(enteredDate)
    };

    // parente function -> pass data from child do parent component
    props.onSaveExpenseData(expenseData);
    clearInputFields();
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__constrols">
          <div className="new-expense__control">
            <label htmlFor="titleNewExpense">Title</label>
            <input 
            type="text" 
            name="titleNewExpense" 
            onChange={titleChangeHandler}
            value={enteredTitle} />
          </div>

          <div className="new-expense__control">
            <label htmlFor="amountNewExpense">Amount</label>
            <input 
            type="number" 
            name="amountNewExpense" 
            min="0.01" step="0.01" 
            onChange={amountChangeHandler}
            value={enteredAmount} />
          </div>

          <div className="new-expense__control">
            <label htmlFor="dateNewExpense">Date</label>
            <input 
            type="date" 
            name="dateNewExpense" 
            min="2019-01-01" max="2022-12-31" 
            onChange={dateChangeHandler}
            value={enteredDate} />
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
