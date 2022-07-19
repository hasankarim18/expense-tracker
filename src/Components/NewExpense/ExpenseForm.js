import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [expenseDate, setExpenseDate] = useState('')

    //  //   const [userInput, setUserInput] = useState({
    //         title: '',
    //         amount: '',
    //         expenseDate: ''
    //     })

    const titleChangeHandler = event => {
        setTitle(event.target.value)
        /**Conventional way */
        // setUserInput({
        //     ...userInput,
        //     title: event.target.value
        // })
        /**Proper way */
        // when you update a state that depends on another state the correct way to use a frunction like below
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         title: event.target.value
        //     }
        // })

    }

    const amountChangeHandler = event => {
        setAmount(event.target.value)

        // setUserInput({
        //     ...userInput,
        //     amount: event.target.amount
        // })
        /**Proper way */
        // when you update a state that depends on another state the correct way to use a frunction like below
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         amount: event.target.value
        //     }
        // })
    }

    const dateChangeHandler = (event) => {
        setExpenseDate(event.target.value)

        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         expenseDate: event.target.value
        //     }
        // })
    }

    const submitHandler = event => {
        event.preventDefault()

        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(expenseDate)
        }


        // emtying the input
        setTitle('')
        setAmount('')
        setExpenseDate('')

        //  console.log(expenseData)
        props.newExpense(expenseData)

    }

    return (

        <form onSubmit={submitHandler} >
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        value={title}
                        onChange={titleChangeHandler}
                        type="text" />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        value={amount}
                        onChange={amountChangeHandler}
                        min="0.01" step="0.01"
                        type="number" />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        value={expenseDate}
                        onChange={dateChangeHandler}
                        min="2009-01-01"
                        max='2030-12-31'
                        type="date" />
                </div>
            </div>
            <div className="new-expense__actions" >
                <button type='submit'>Add Expense</button>
            </div>
        </form>

    )
}

export default ExpenseForm