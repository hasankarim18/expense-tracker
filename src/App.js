import React from 'react'
import Main from './Main'
import { expenseStore } from './Redux/store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <div>
      <p className="text-white" >adv-Dev</p>
      <Provider store={expenseStore} >
        <Main />
      </Provider>

    </div>
  )
}

export default App