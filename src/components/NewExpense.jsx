import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ addExpenseHandler }) => {
    const onSaveExpense = (expenseData) => {
        const saveData = {
            ...expenseData,
        };

        addExpenseHandler(saveData);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpense={onSaveExpense} />
        </div>
    );
};

export default NewExpense;
