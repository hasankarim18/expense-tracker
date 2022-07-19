import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'


const NewExpense = (props) => {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-10">
                        <div className="new-expense" >
                            <ExpenseForm newExpense={props.newExpense} />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default NewExpense