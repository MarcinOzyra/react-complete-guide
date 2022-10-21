import React from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
  // console.log(props);
  return (
    <Card className="expenses">
      {props.expenses.map((item) => (
        <ExpenseItem title={item.title} amount={item.amount} date={item.date} key={item.id} />
      ))}
    </Card>
  );
};

export default Expenses;
