import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [selectedYear, setYear] = useState('2020');
  const addYearHandler = (year) => {
    setYear(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onChangeYear={addYearHandler} year={selectedYear} />
      {props.expenses.map((item) => (
        <ExpenseItem title={item.title} amount={item.amount} date={item.date} key={item.id} />
      ))}
    </Card>
  );
};

export default Expenses;
