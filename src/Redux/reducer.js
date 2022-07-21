import { combineReducers } from 'redux'
import { expenses } from '../data/expenseData'


const initialState = {
    expenses: expenses
}





const expenseReducer = (state = initialState, action) => {
    return state
}



export const Reducer = combineReducers({
    expense: expenseReducer
})