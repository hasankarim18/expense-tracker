import { createStore } from 'redux'
import { Reducer } from './reducer'




export const expenseStore = createStore(Reducer)