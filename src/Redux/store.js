import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Reducer } from './reducer'




export const expenseStore = createStore(Reducer, applyMiddleware(thunk))