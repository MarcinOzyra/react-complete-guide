import React from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
    { id: 'e1', title: 'Car insurance', amount: 234.45, date: new Date(2022, 10, 19) },
    { id: 'e2', title: 'Wood for winter', amount: 100, date: new Date(2022, 9, 19) },
    { id: 'e3', title: 'Toilet paper', amount: 34.55, date: new Date(2022, 10, 10) },
    { id: 'e4', title: 'New chair', amount: 134.45, date: new Date(2022, 10, 19) }
  ];

  return (
    <div>
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
