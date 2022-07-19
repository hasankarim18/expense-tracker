import ExpenseItem from './ExpenseItem';
import MyCard from './UI/Card';
import { expenses } from '../data/expenseData'
import './Expenses.css'

function Expenses() {

    const expenseItem = expenses.map(item => {
        return <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
        />
    })

    return (
        <div className="container text-center" >
            <h1>Lets started... centered branch -development </h1>
            <h1>Lets started... centered branch -development new </h1>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-10 col-md-10">
                    <MyCard className="expenses">
                        {expenseItem}
                    </MyCard>
                </div>
            </div>
        </div>

    );
}

export default Expenses;
