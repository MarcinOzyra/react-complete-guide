import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [formVisibility, setFormVisibility] = useState(false);
  const [enteredData, setEnteredData] = useState({
    title: '',
    amount: '',
    date: ''
  });

  const inputChangeHandler = (e) => {
    setEnteredData((prevState) => {
      if (e.target.name === 'amount') return { ...prevState, [e.target.name]: +e.target.value };
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    enteredData.date = new Date(enteredData.date);
    setEnteredData({ title: '', amount: '', date: '' });
    setFormVisibility(false);
    props.onSaveExpenseData(enteredData);
  };

  const showHideForm = () => {
    formVisibility ? setFormVisibility(false) : setFormVisibility(true);
  };

  if (!formVisibility) return <button onClick={showHideForm}>Add New Expense</button>;

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" name="title" value={enteredData.title} onChange={inputChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" name="amount" value={enteredData.amount} onChange={inputChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" name="date" value={enteredData.date} onChange={inputChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="reset" onClick={showHideForm}>
          Cancel
        </button>
        <button type="sumbit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
