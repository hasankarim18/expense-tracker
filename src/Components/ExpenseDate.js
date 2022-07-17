import React from 'react'
import './ExpenseDate.css'

const ExpenseDate = (props) => {
    const month = props.date.toLocaleDateString('en-US', { month: 'long' })
    const year = props.date.toLocaleDateString('en-US', { year: 'numeric' })
    const day = props.date.toLocaleDateString('en-US', { day: 'numeric' })

    return (
        <div className="expense-date" >
            <div className="expense-date__month" > {month} </div>
            <div className="expense-date__year"> {year} </div>
            <div className="expense-date__day"> {day} </div>

        </div>
    )
}

export default ExpenseDate