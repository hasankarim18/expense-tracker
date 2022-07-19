import React, { useState } from 'react';
import './App.css';
import { expenses } from './data/expenseData'
import Expenses from './Components/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';

function App(props) {

  // const [addedExpense, setAddedExpense] = useState([])
  const [expenseData, setExpensesData] = useState(expenses)

  const [filteredYear, setFilteredYear] = useState(new Date().getFullYear().toString())



  const filtterChangeHandler = selectedYear => {
    console.log(selectedYear)
    setFilteredYear(selectedYear)

  }

  const filteredExpenses = expenseData.filter(item => {
    return item.date.getFullYear().toString() === filteredYear
  })

  console.log('filteredYear', filteredYear)
  console.log('filteredExpenses', filteredExpenses)


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
      <Expenses
        filteredYear={filteredYear}
        filtterChangeHandler={filtterChangeHandler}
        expenses={filteredExpenses} />
    </div>
  );
}

export default App;
