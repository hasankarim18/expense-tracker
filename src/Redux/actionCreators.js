import * as actions from './actionTypes'



export const signUp = (email, password) => {
    return {
        type: actions.SIGN_UP,
        payload: {
            email: email,
            password: password
        }
    }
}