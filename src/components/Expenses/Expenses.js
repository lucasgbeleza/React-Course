import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'

const Expenses = (props) => {
    let data = props.dataApp;
    return (
      <div>
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
