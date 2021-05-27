import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (enteredExpense) => {
    // setExpenses([...DUMMY_EXPENSES, enteredExpense]); -> not correct but works, as it transforms data into array dataype
    setExpenses((prevExpenses) =>{ //correct way of transforming data as it should be passed as function to state distructured variables
      return [enteredExpense, ...prevExpenses];
    })
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses dataApp={expenses} />
      
    </div>
  );
};

export default App;
