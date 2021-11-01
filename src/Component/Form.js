import React, { useState } from 'react'


const Form = (props) => {

    const [firstName, setfirstName] = useState('')
    const [firstNameError, setfirstNameError] = useState('')
    const [lastName, setlastName] = useState('')
    const [lastNameError, setlastNameError] = useState('')
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [confirmPasswordError, setconfirmPasswordError] = useState('')

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {
            firstName, lastName, email, password, confirmPassword
        }
        setfirstName(e.target.value);
        if (e.target.value.length < 1) {
            setfirstNameError('First name is required!');
        } else if (e.target.value.length < 3) {
            setfirstNameError('First name must be 2 character or longer')
        }
        setlastName(e.target.value);
        if (e.target.value.length < 1) {
            setlastNameError('last name is required!');
        } else if (e.target.value.length < 3) {
            setlastNameError('last name must be 2 character or longer')
        }
        setEmail(e.target.value);
        if (e.target.value.length < 1) {
            setEmailError('Email is required!');
        } else if (e.target.value.length < 3) {
            setEmailError('Email must be 2 character or longer')
        }
        setPassword(e.target.value);
        if (e.target.value.length < 1) {
            setPasswordError('Password is required!');
        } else if (e.target.value.length < 3) {
            setfirstNameError('Password must be 2 character or longer')
        }
        setconfirmPassword(e.target.value)
        if (confirmPassword !== password) {
            setPasswordError('Password must match!');
        }
    }


    return (
        <div>

            <form onSubmit={ (e) => createUser }>
                <div>
                    First Name:
                    <input type='text' onChange={(e) => setfirstName(e.target.value)}>
                    </input>
                    {

                        firstNameError ?
                            <p style={{ color: 'red' }}> {firstNameError}</p> :
                            ''
                    }
                </div>
                <div>
                    Last Name:
                    <input type='text' onChange={(e) => setlastName(e.target.value)}></input>
                    {

                        lastNameError ?
                            <p style={{ color: 'red' }}> {lastNameError}</p> :
                            ''
                    }
                </div>
                <div>
                    Email:
                    <input type='text' onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                {

                    emailError ?
                        <p style={{ color: 'red' }}> {emailError}</p> :
                        ''
                }

                <div>
                    Password:
                    <input type='password' onChange={(e) => setPassword(e.target.value)}></input>
                    {

                        passwordError ?
                            <p style={{ color: 'red' }}> {passwordError}</p> :
                            ''
                    }
                </div>
                <div>
                    Confirm Password:
                    <input type='password' onChange={(e) => setconfirmPassword(e.target.value)}></input>
                    {

                        confirmPasswordError ?
                            <p style={{ color: 'red' }}> {confirmPasswordError}</p> :
                            ''
                    }
                </div>
                <input type='Submit' value='Create User'></input>
            </form>
            <h6>View Form Data</h6>
            <p>First Name: {firstName}  </p>
            <p>last Name: {lastName} </p>
            <p>Email: {email} </p>
            <p>Password: {password} </p>
            <p>Confirm Password: {confirmPassword} </p>
        </div>
    )
}

export default Form;