import React, { useState } from 'react'
import './Form.css'
import axios from 'axios'

const Form = () => {
    // state + function to update the state
    const [userDetails, setUserDetails] = useState({
        userName: '',
        userEmail: '',
        message: ''
    })

    // take the state and override it
    const formValues = (event) => {
        setUserDetails({
            ...userDetails,
            [event.target.name]: event.target.value
        })
    }

    // button submit
    const register = async (event) => {
        event.preventDefault()

        // send data as a string
        // grab data from the useState
        const body = JSON.stringify({
            userName: userDetails.userName,
            userEmail: userDetails.userEmail
        })

        // post request to backend
        // set the body + the headers
        const response = await axios.post('/api/register', body, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        // grab everything using spread operator
        setUserDetails({
            ...userDetails,
            message: response.data.message
        })

    }

    return (
        <div className='container'>
            <h1 className='title'>Register user</h1>
            <form onSubmit={register}>
                <label>Name</label>
                <input required type="text" id="userName" name="userName" onChange={formValues} />
                <label>Email</label>
                <input required type="email" id="userEmail" name="userEmail" onChange={formValues} />
                <button type="submit">Register</button>
                { userDetails.message ? <h1 className="resultMessage">{ userDetails.message }</h1> : null }
            </form>            
        </div>
    )
}

export default Form