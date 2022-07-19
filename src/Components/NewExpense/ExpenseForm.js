import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {
    // const [title, setTitle] = useState('')
    // const [amount, setAmount] = useState('')
    // const [expenseDate, setExpenseDate] = useState('')

    const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        expenseDate: ''
    })

    const titleChangeHandler = event => {
        //setTitle(event.target.value)
        /**Conventional way */
        // setUserInput({
        //     ...userInput,
        //     title: event.target.value
        // })
        /**Proper way */
        // when you update a state that depends on another state the correct way to use a frunction like below
        setUserInput((prevState) => {
            return {
                ...prevState,
                title: event.target.value
            }
        })

    }

    const amountChangeHandler = event => {
        //   setAmount(event.target.value)

        // setUserInput({
        //     ...userInput,
        //     amount: event.target.amount
        // })
        /**Proper way */
        // when you update a state that depends on another state the correct way to use a frunction like below
        setUserInput((prevState) => {
            return {
                ...prevState,
                amount: event.target.value
            }
        })
    }

    const dateChangeHandler = (event) => {
        //  setExpenseDate(event.target.value)

        setUserInput((prevState) => {
            return {
                ...prevState,
                expenseDate: event.target.value
            }
        })
    }

    const onSubmit = event => {
        event.preventDefault()
        console.log(userInput)

    }

    return (

        <form onSubmit={onSubmit} >
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        onChange={titleChangeHandler}
                        type="text" />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        onChange={amountChangeHandler}
                        min="0.01" step="0.01"
                        type="number" />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        onChange={dateChangeHandler}
                        min="2009-01-01"
                        max='2030-12-31'
                        type="date" />
                </div>
            </div>
            <div className="new-expense__actions" >
                <button>Add Expense</button>
            </div>
        </form>

    )
}

export default ExpenseForm