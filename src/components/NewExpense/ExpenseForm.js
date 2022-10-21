import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  //   const [enteredTitle, setEnteredTitle] = useState('');
  //   const [enteredAmount, setEnteredAmount] = useState('');
  //   const [enteredDate, setEnteredDate] = useState('');
  const [enteredData, setEnteredData] = useState({
    title: '',
    amount: '',
    date: ''
  });
  console.log(enteredData);

  const inputChangeHandler = (e) => {
    setEnteredData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const titleChangeHandler = (e) => {
    // setEnteredTitle(e.target.value);
    setEnteredData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  const amountChangeHandler = (e) => {
    // setEnteredAmount(e.target.value);
    setEnteredData({ ...enteredData, enteredAmount: e.target.value });
  };
  const dateChangeHandler = (e) => {
    // setEnteredDate(e.target.value);
    setEnteredData({ ...enteredData, enteredDate: e.target.value });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" name="title" onChange={inputChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.1" name="amount" onChange={inputChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" name="date" onChange={inputChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="sumbit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
