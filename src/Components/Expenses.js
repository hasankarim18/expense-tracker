import ExpenseItem from './ExpenseItem';
import MyCard from './UI/Card';

import './Expenses.css'
import ExpensesFilter from './ExpenseFilter';
import React, { useState } from 'react';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020')




    const expenseItem = props.expenses.map(item => {
        return <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
        />
    })

    const filtterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)

    }



    return (
        <div className="container text-center" >

            <div className="row justify-content-center">
                <MyCard className="mb-3" >

                </MyCard>
                <div className="col-12 col-sm-10 col-md-10">
                    <MyCard className="expenses">
                        <ExpensesFilter
                            selected={filteredYear}
                            filtterChangeHandler={filtterChangeHandler} />
                        {expenseItem}
                    </MyCard>
                </div>
            </div>
        </div>
    );
}

export default Expenses;
