import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpanseDataHandler = (enteredExpanseData) => {
    const enteredData = {
      id: Math.random().toString(),
      ...enteredExpanseData
    };
    props.onAddExpense(enteredData);
    // console.log(enteredData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpanseDataHandler} />
    </div>
  );
};

export default NewExpense;
