import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Home.css'

const Home = () => {
    // state to represent users from the database
    const [users, setUsers] = useState([])

    // retrieve from backend
    const getUsers = async () => {
        const response = await axios.get('/api/users')
        // console.log(response.data.users)
        setUsers(response.data.users)
    }

    // React hooks, it takes another function inside + empty array
    // it runs once when the page is loaded
    useEffect(() => {
        getUsers() 
    }, [])

    // loop everything inside state
    // key is just for React warnings
    const allUsers = users.length > 0 && users.map((user, index) => {
        return <li key={index}>Name: {user.name} - Email: {user.email} </li>
    })

    const message = users.length > 0 ? "All users" : "No users"

    return (
        <div className='container'>
            <h1 className='title'>{ message }</h1>
            <ul className='users'>
                { allUsers }
            </ul>
        </div>
    )
}

export default Home