import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  let data = props.dataApp;

  const dataFromFilter = (filteredData) => {
    setFilteredYear(filteredData);
    
  };

  const filterByYear = data.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  });
 
  const changeArrayList = (year) => {
    let yearFromData = data.map((itens) => {
       return itens.date.getFullYear().toString();
    })
    if(!(yearFromData.includes(year)) && year === "0"){
      return data;
    } else {
      return filterByYear;
    } 
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultYear={filteredYear}
          filterHandler={dataFromFilter}
        />
        {/* <button onClick={changeArrayList}>teste</button> */}
        
        {/* {filterByYear.map((expense) => ( */}
        {changeArrayList(filteredYear).map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
