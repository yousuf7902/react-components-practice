import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from 'react';

function Expenses(props) {
    const expenses = props.items;

    const [filterDate, setFilterDate] = useState("");

    const visibleData = filterDate
        ? expenses.filter((e) => e.date.getFullYear() === parseInt(filterDate))
        : expenses;

    return (
        <Card className="Expenses">
            <ExpensesFilter expenses={expenses} onFilterByDate={(data) => setFilterDate(data)} />
            {
                <>
                    {visibleData.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    ))}
                </>
            }

            {/* <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            />
            <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
            />
            <ExpenseItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
            />
            <ExpenseItem
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date}
            /> */}
        </Card>
    );
}

export default Expenses;
