import "./ExpensesFilter.css";

const ExpensesFilter = ({ expenses , onFilterByDate}) => {
    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter By Year</label>
                <select onChange={(event) => onFilterByDate(event.target.value)}>
                    <option value="">Year</option>
                    {expenses.map((expense) => (
                        <option value={expense.date.getFullYear()}>
                            {expense.date.getFullYear()}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;
