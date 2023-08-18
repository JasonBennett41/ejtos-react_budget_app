import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, setBudget } = useContext(AppContext);
    const [editableBudget, setEditableBudget] = useState(budget);

    const maxBudget = 20000;

    const handleBudgetChange = (event) => {
        setEditableBudget(event.target.value);
    };

    const handleBudgetBlur = () => {
        const parsedBudget = parseFloat(editableBudget);
        if (!isNaN(parsedBudget)) {
            setBudget(parsedBudget);
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input
                type='number'
                step='10'
                value={editableBudget}
                onChange={handleBudgetChange}
                onBlur={handleBudgetBlur}
                max={maxBudget}
            />
        </div>
    );
};

export default Budget;
