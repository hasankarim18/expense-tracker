import ExpenseItem from './ExpenseItem';
import MyCard from './UI/Card';

import './Expenses.css'
import ExpensesFilter from './ExpenseFilter';
import React, { useState } from 'react';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {

    const expenseItem = props.expenses.map(item => {
        return <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
        />
    })

    return (
        <div className="container text-center" >

            <div className="row justify-content-center">
                <MyCard className="mb-3" >

                </MyCard>
                <div className="col-12 col-sm-10 col-md-10">
                    <MyCard className="expenses">
                        <ExpensesFilter
                            selected={props.filteredYear}
                            filtterChangeHandler={props.filtterChangeHandler} />

                        <ExpensesChart expenses={props.expenses} />

                        {props.expenses.length === 0 ? <h3>No item to show</h3> : expenseItem}

                    </MyCard>
                </div>
            </div>
        </div>
    );
}

export default Expenses;
