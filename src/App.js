import React from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  let expenses = [
    { id: 'e1', title: 'Car insurance', amount: 234.45, date: new Date(2022, 10, 19) },
    { id: 'e2', title: 'Wood for winter', amount: 100, date: new Date(2022, 9, 19) },
    { id: 'e3', title: 'Toilet paper', amount: 34.55, date: new Date(2021, 10, 10) },
    { id: 'e4', title: 'New chair', amount: 134.45, date: new Date(2021, 10, 19) }
  ];

  const addExpenseHandler = (expense) => {
    expenses = [...expenses, expense];
    // console.log(expenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
