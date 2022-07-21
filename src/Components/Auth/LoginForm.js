import React, { useState } from 'react'
import { signIn } from '../../Redux/actionCreators'
import { connect } from 'react-redux'
import Spinner from '../UI/Spinner'

const mapStateToProps = state => {
    return {
        singInLoading: state.expense.singInLoading,
        singInSuccess: state.expense.singInSuccess,
        singInFailed: state.expense.singInFailed
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signIn: (email, password) => dispatch(signIn(email, password))
    }
}

const LoginForm = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        // console.log(email, password)
        props.signIn(email, password)
    }

    const emailChangeHandler = (e) => {
        setEmail(e.target.value)
    }

    const passwordChangeHandler = e => {
        setPassword(e.target.value)
    }

    //   console.log(props)

    let signInForm = <form onSubmit={submitHandler} >
        <label>Eamil</label>
        <input
            className="form-control"
            onChange={emailChangeHandler}
            value={email}
            type="text" />
        <br />
        <label>Password</label>
        <input
            className="form-control"
            onChange={passwordChangeHandler}
            value={password}
            type="text" />
        <br />
        <button className="btn btn-success" >Sing In</button>
    </form>

    if (props.singInLoading) {
        signInForm = <Spinner color="grey" size="6x" />
    } else if (props.singInSuccess) {
        signInForm = <h1>Singned in successfully</h1>
    } else if (props.singInFailed) {
        signInForm = <h1 className="text-danger" >Singed in failed</h1>
    }

    return (
        <div>
            <h1>Enter email and password:</h1>
            {signInForm}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)