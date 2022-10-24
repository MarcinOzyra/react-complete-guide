import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [selectedYear, setYear] = useState('2020');
  const addYearHandler = (year) => {
    setYear(year);
  };

  const filteredExpenses = props.expenses.filter((item) => item.date.getFullYear().toString() === selectedYear);

  return (
    <Card className="expenses">
      <ExpensesFilter onChangeYear={addYearHandler} year={selectedYear} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
