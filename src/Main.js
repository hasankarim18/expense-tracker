import React, { useState } from 'react';
import './App.css';
import { expenses } from './data/expenseData'
import Expenses from './Components/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';
import Header from './Components/Header/Header';

function Main(props) {

    // const [addedExpense, setAddedExpense] = useState([])
    const [expenseData, setExpensesData] = useState(expenses)

    const [filteredYear, setFilteredYear] = useState(new Date().getFullYear().toString())

    const filtterChangeHandler = selectedYear => {

        setFilteredYear(selectedYear)

    }

    const filteredExpenses = expenseData.filter(item => {
        return item.date.getFullYear().toString() === filteredYear
    })

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
            <Header />
            <NewExpense newExpense={newExpense} />

            <Expenses
                filteredYear={filteredYear}
                filtterChangeHandler={filtterChangeHandler}
                expenses={filteredExpenses} />
        </div>
    );
}

export default Main;
