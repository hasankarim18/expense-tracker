
import './App.css';

import Expenses from './Components/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';

function App() {


  const newExpense = (data) => {
    let newExpenseData = {
      ...data,
      id: Math.random()
    }
    console.log('new Expense', newExpenseData)
    return newExpense
  }

  return (
    <div>
      <NewExpense newExpense={newExpense} />
      <Expenses />
    </div>
  );
}

export default App;
