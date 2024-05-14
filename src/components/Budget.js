import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import '../App.css';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget:</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} className='marginLeft'></input>
        </div>
    );
};
export default Budget;