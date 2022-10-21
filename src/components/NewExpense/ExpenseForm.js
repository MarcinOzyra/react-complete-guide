import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  //   const [enteredTitle, setEnteredTitle] = useState('');
  //   const [enteredAmount, setEnteredAmount] = useState('');
  //   const [enteredDate, setEnteredDate] = useState('');
  const [enteredData, setEnteredData] = useState({
    title: '',
    amount: '',
    date: ''
  });

  const inputChangeHandler = (e) => {
    setEnteredData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  /*
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
*/
  const submitHandler = (e) => {
    e.preventDefault();
    enteredData.date = new Date(enteredData.date);
    setEnteredData({ title: '', amount: '', date: '' });
    props.onSaveExpenseData(enteredData);
    // console.log(enteredData);
  };

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
        <button type="sumbit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
