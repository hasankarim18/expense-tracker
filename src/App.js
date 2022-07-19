import React, { useState } from 'react';
import './App.css';
import { expenses } from './data/expenseData'
import Expenses from './Components/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';

function App(props) {

  // const [addedExpense, setAddedExpense] = useState([])
  const [expenseData, setExpensesData] = useState(expenses)

  const newExpense = (data) => {
    let newExpenseData = {
      ...data,
      id: Math.random()
    }

    setExpensesData((prevExpense => {
      return ([newExpenseData, ...prevExpense])
    }))

  }

  return (
    <div>
      <NewExpense newExpense={newExpense} />
      <Expenses expenses={expenseData} />
    </div>
  );
}

export default App;
