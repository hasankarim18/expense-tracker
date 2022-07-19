import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {
    return (

        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input

                        type="text" />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        min="0.01" step="0.01"
                        type="number" />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
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