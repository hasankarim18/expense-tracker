import { combineReducers } from 'redux'
import { expenses } from '../data/expenseData'
import * as actions from './actionTypes'


const initialState = {
    expenses: expenses,
    iLoginFormOpen: false
}





const expenseReducer = (state = initialState, action) => {

    switch (action.type) {

        case actions.LOGIN_TOGGLE:
            return {
                ...state,
                iLoginFormOpen: !state.iLoginFormOpen
            }


        default:
            return state
    }

}



export const Reducer = combineReducers({
    expense: expenseReducer
})