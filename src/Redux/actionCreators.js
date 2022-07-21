import * as actions from './actionTypes'
import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import { firebaseConfig } from '../firebaseConfig/firebaseConfig'


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const signUpLoading = () => {
    return {
        type: actions.SIGN_UP_LOADING
    }
}

const signUpSuccess = () => {
    return {
        type: actions.SIGN_UP_SUCCESS
    }
}

const signUpFailed = () => {
    return {
        type: actions.SIGN_UP_FAILED
    }
}




export const signUp = (email, password) => dispatch => {

    dispatch(signUpLoading())

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            dispatch(signUpSuccess())
            console.log('sign up successful')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('sign up failed')
            dispatch(signUpFailed())
            // ..
        });

}

/******
 * Sign out
 * 
 */

const signOutLoading = () => {
    return {
        type: actions.SIGN_OUT_LOADING
    }
}

const signOutSuccess = () => {
    return {
        type: actions.SIGN_OUT_SUCCESS
    }
}

const signOutFailed = () => {
    return {
        type: actions.SIGN_UP_FAILED
    }
}


export const signOutFunc = () => dispatch => {
    dispatch(signOutLoading())

    signOut(auth).then(() => {
        // Sign-out successful.
        dispatch(signOutSuccess())
    }).catch((error) => {
        // An error happened.
        dispatch(signOutFailed())
    });
}


/** 
 * Authentication status
 */

export const isUserSingedIn = () => {
    return {
        type: actions.IS_USER_SIGNED_IN
    }
}

export const isUserSignedOUt = () => {
    return {
        type: actions.IS_USER_SIGNED_OUT
    }
}






onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log('user logged in')
        //  dispatch(isUserSingedIn)
        // ...
        isUserSingedIn()
    } else {
        // User is signed out
        // ...
        isUserSignedOUt()
        console.log('user not logged in')
    }
});




/**
 * Sign in
 */

const signInLoading = () => {
    return {
        type: actions.SIGN_IN_LOADING
    }
}

const signInSuccess = () => {
    return {
        type: actions.SIGN_IN_SUCCESS
    }
}

const signInFailed = () => {
    return {
        type: actions.SIGN_IN_FAILED
    }
}


export const signIn = (email, password) => dispatch => {

    dispatch(signInLoading())

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            dispatch(signInSuccess())
            console.log('sign in success')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            dispatch(signInFailed)
            console.log('sing in failed')
        });




}