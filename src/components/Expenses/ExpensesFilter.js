import './ExpensesFilter.css';
const ExpensesFilter = (props) => {

    const sendYearToExpenses = (event) =>{
        props.filterHandler(event.target.value);
    }

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by Year</label>
                <select defaultValue={props.defaultYear} onChange={sendYearToExpenses}>
                    <option value="0">All Itens</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    )
}

export default ExpensesFilter;