import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import '../App.css';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const budgetValue = Number(event.target.value);
        const totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);
        if (budgetValue < totalExpenses) {
            alert("You can not reduce the budget value lower than the spending.");
        } else if (budgetValue > 20000) {
            alert("Not allowed to enter budget morethan 20,000/-");
        } else {
            setNewBudget(budgetValue);
        }
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} className='marginLeft' max={20000}></input>
        </div>
    );
};
export default Budget;