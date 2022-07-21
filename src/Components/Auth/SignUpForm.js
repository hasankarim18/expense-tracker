import React, { useState } from 'react'

const SignUpForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = (e) => {
        e.preventDefault()
        // console.log('sign up')
        console.log(email, password)
    }

    const onEmailHandler = (e) => {
        setEmail(e.target.value)
        console.log(e.target.value)
    }

    const onPasswordHandler = (e) => {
        setPassword(e.target.value)
        console.log(e.target.value)
    }

    return (
        <div>
            <h1>Sing up with firebase</h1>
            <form onSubmit={submitHandler} >
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
        </div>
    )
}

export default SignUpForm