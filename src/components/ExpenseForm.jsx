import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = ({onSaveExpense}) => {
    //multiple states used here
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    //instead of multiple states we can used only one states
    /* const [userInput, setUserInput] = useState({
        title: "",
        amount: "",
        date: "",
    }); */

    /* const titleChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            title: event.target.value,
        });

        //states updates depends on the previous states then use it 
        setUserInput((prevState) => {
            return {...prevState, title: event.target.value};
        });
    }; */

    /* const amountChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            amount: event.target.value,
        });
    }; */

    /* const dateChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            date: event.target.value,
        });
    }; */

    const inputChangeHandler = (identifier, value) => {
        if (identifier === "title") {
            setTitle(value);
        } else if (identifier === "amount") {
            setAmount(value);
        } else {
            setDate(value);
        }
    };

    const onSubmit = (event) => {
        event.preventDefault();

        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date),
        };

        onSaveExpense(expenseData);

        setTitle("");
        setAmount("");
        setDate("");
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(event) => inputChangeHandler("title", event.target.value)}
                    />
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={amount}
                        onChange={(event) => inputChangeHandler("amount", event.target.value)}
                    />
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2024-12-31"
                        value={date}
                        onChange={(event) => inputChangeHandler("date", event.target.value)}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
