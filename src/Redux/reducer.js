import { combineReducers } from 'redux'
import { expenses } from '../data/expenseData'
import * as actions from './actionTypes'


const initialState = {
    expenses: expenses,
    iLoginFormOpen: false,
    isSingingUpLoading: false,
    isSignUpSuccess: false,
    isSignUPFailed: false,
    isSignOutLoading: false,
    isSignOutSuccess: false,
    isSignOutFailed: false,
    singInLoading: false,
    singInSuccess: false,
    singInFailed: false,
    isUserSignedIn: false,
    isUserSignedOut: false
}





const expenseReducer = (state = initialState, action) => {

    switch (action.type) {
        case actions.SIGN_UP_LOADING:

            return {
                ...state,
                isSingingUpLoading: true,
                isSignUpSuccess: false,
                isSignUPFailed: false
            }
        case actions.SIGN_UP_SUCCESS:
            return {
                ...state,
                isSingingUpLoading: false,
                isSignUpSuccess: true,
                isSignUPFailed: false
            }
        case actions.SIGN_UP_LOADING:
            return {
                ...state,
                isSingingUpLoading: false,
                isSignUpSuccess: false,
                isSignUPFailed: true
            }
        case actions.SIGN_OUT_LOADING:
            return {
                ...state,
                isSignOutLoading: true,
                isSignOutSuccess: false,
                isSignOutFailed: false
            }
        case actions.SIGN_OUT_SUCCESS:
            return {
                ...state,
                isSignOutLoading: false,
                isSignOutSuccess: true,
                isSignOutFailed: false,
                singInSuccess: false,
                isUserSignedOut: true,
                isUserSignedIn: false
            }
        case actions.SIGN_UP_FAILED:
            return {
                ...state,
                isSignOutLoading: false,
                isSignOutSuccess: false,
                isSignOutFailed: true
            }
        case actions.SIGN_IN_LOADING:
            return {
                ...state,
                singInLoading: true,
                singInSuccess: false,
                singInFailed: false
            }
        case actions.SIGN_IN_SUCCESS:
            return {
                ...state,
                singInLoading: false,
                singInSuccess: true,
                singInFailed: false,
                isUserSignedOut: false,
                isUserSignedIn: true
            }
        case actions.SIGN_IN_FAILED:
            return {
                ...state,
                singInLoading: false,
                singInSuccess: false,
                singInFailed: true
            }
        case actions.IS_USER_SIGNED_IN:
            return {
                ...state,
                isUserSignedIn: true,
                isUserSignedOut: false
            }

        case actions.IS_USER_SIGNED_OUT:
            return {
                ...state,
                isUserSignedIn: false,
                isUserSignedOut: true
            }



        default:
            return state
    }

}



export const Reducer = combineReducers({
    expense: expenseReducer
})