import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import totalExpenses from "./ExpenseTotal";

const Budget = () => {
  const { budget, setBudget } = useContext(AppContext);
  const [editableBudget, setEditableBudget] = useState(budget);

  const maxBudget = 20000;

  const handleBudgetChange = (event) => {
    const newValue = event.target.value;
    setEditableBudget(newValue);

    if (newValue > maxBudget) {
      alert("Maximum Budget Value is " + maxBudget);
      setEditableBudget("");
    } else {
      // Update global budget value only if the input is a valid number
      const parsedBudget = parseFloat(newValue);
      if (!isNaN(parsedBudget)) {
        setBudget(parsedBudget);
      }
    }

    if (newValue < totalExpenses) {
      alert(
        "Budget may not be decreased under what has already been allocated."
      );
      setEditableBudget(totalExpenses);
    }
  };

  return (
    <div className="alert alert-secondary">
      <span>Budget: £</span>
      <input
        type="number"
        step="10"
        value={editableBudget}
        onChange={handleBudgetChange}
        max={maxBudget}
        min={totalExpenses}
      />
    </div>
  );
};

export default Budget;
