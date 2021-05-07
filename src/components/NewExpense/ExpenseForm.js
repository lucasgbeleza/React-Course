import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <div>
      <form>
        <div className="new-expense__constrols">
          <div className="new-expense__control">
            <label for="titleNewExpense">Title</label>
            <input type="text" name="titleNewExpense" />
          </div>

          <div className="new-expense__control">
            <label for="amountNewExpense">Amount</label>
            <input type="number" name="amountNewExpense" min="0.01" step="0.01" />
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
