import React, { useState } from 'react'
import { signUp } from '../../Redux/actionCreators'
import Spinner from '../UI/Spinner'

import { connect } from 'react-redux'

const mapStateToProps = state => {
    // console.log(state.expense)
    return {
        isSingingUpLoading: state.expense.isSingingUpLoading,
        isSignUpSuccess: state.expense.isSignUpSuccess,
        isSignUPFailed: state.expense.isSignUPFailed
    }
}


const mapDispatchToProps = dispatch => {
    return {
        signUp: (email, password) => dispatch(signUp(email, password))
    }
}



const SignUpForm = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = (e) => {
        e.preventDefault()
        // console.log('sign up')
        console.log(email, password)
        props.signUp(email, password)
    }

    const onEmailHandler = (e) => {
        setEmail(e.target.value)
        //console.log(e.target.value)
    }

    const onPasswordHandler = (e) => {
        setPassword(e.target.value)
        //console.log(e.target.value)
    }
    //  console.log(props)

    let showSingUpForm = <form onSubmit={submitHandler} >
        <label>Email</label>
        <input
            className="form-control"

            value={email}
            onChange={onEmailHandler}
            type="email" />
        <br />
        <label>Password</label>
        <input
            className="form-control"

            value={password}
            onChange={onPasswordHandler}
            type="text" />
        <br />
        <div className="text-right">
            <button type='submit' className="btn btn-success">Sing Up</button>
        </div>
    </form>

    if (props.isSingingUpLoading) {
        showSingUpForm = <Spinner size="6x" color="grey" />
    } else if (props.isSignUpSuccess) {
        showSingUpForm = <h1>Sign up successful</h1>
    } else if (props.isSignUPFailed) {
        showSingUpForm = <h1 className="text-danger" >Sing up failed</h1>
    }

    return (
        <div>
            <h1>Sing up with firebase</h1>
            {/* <Spinner size="6x" color="grey" /> */}
            {showSingUpForm}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)