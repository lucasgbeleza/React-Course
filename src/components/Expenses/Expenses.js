import { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');
  let data = props.dataApp;

  const dataFromFilter = (filteredData) => {
    setFilteredYear(filteredData);
  }

  return (
    <div>
      <ExpensesFilter defaultYear={filteredYear} filterHandler={dataFromFilter} />
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

export default Expenses;
