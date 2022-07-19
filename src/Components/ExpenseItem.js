import React, { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import MyCard from './UI/Card';


const ExpenseItem = (props) => {


    return (
        <MyCard className="expense-item" >
            <div>
                <ExpenseDate date={props.date} />
            </div>
            <div className="expense-item__description" >
                <h2> {props.title} </h2>
                <div className="expense-item__price" >{props.amount}</div>
            </div>
        </MyCard>
    )
}

export default ExpenseItem