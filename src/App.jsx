import "./App.css";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";
import { useState } from "react";

function App() {
    const [items, setItems] = useState([
        {
            id: "e1",
            title: "Car Insurence",
            amount: "255.03",
            date: new Date(2024, 4, 8),
        },
        {
            id: "e2",
            title: "Book Buy",
            amount: "55.83",
            date: new Date(2022, 1, 15),
        },
        {
            id: "e3",
            title: "Mobile Recharge",
            amount: "5.89",
            date: new Date(2021, 2, 7),
        },
        {
            id: "e4",
            title: "Resturant Bill",
            amount: "90.25",
            date: new Date(2020, 3, 23),
        },
    ]);

    const addExpenseHandler = (expenseData) => {
        setItems([expenseData, ...items]);
    };

    return (
        <div>
            <h2 className="header">Let&apos;s get started React!</h2>
            <NewExpense addExpenseHandler={addExpenseHandler} />
            <Expenses items={items} />
        </div>
    );
}

export default App;
