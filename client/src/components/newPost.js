import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const Post = () => {

    const [postDetails, setPostDetails] = useState({
        postDate: '',
        postTitle: '',
        postText: '',
        message: ''
    })

    // redirect after submitting new post
    const [theRoute, setTheRoute] = useState(null)

    // take the state and override it
    const formValues = (event) => {
        setPostDetails({
            ...postDetails,
            [event.target.name]: event.target.value
        })
    }

    // button submit
    const publishPost = async (event) => {
        event.preventDefault()

        // send data as a string
        // grab data from the useState
        const body = JSON.stringify({
            postDate: postDetails.postDate,
            postTitle: postDetails.postTitle,
            postText: postDetails.postText
        })

        // post request to backend
        // set the body + the headers
        const response = await axios.post('/api/post', body, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        // grab everything using spread operator
        setPostDetails({
            ...postDetails,
            message: response.data.message
        })

        setTheRoute('/wherever')

    }

    if (theRoute) {
        return <Redirect to='/' />
    }

    return (
        <div>
            <h2>Create a new post</h2>
            <form className='form' onSubmit={publishPost} action='/'>
                <label for='postDate'>Date</label>
                <input required type='text' id='postDate' name='postDate' onChange={formValues} />
                <label for='postTitle'>Title</label>
                <input type='text' id='postTitle' name='postTitle' onChange={formValues} />
                <label for='postText'>Text</label>
                <textarea required id='postText' name='postText' onChange={formValues} />
                <button type='submit'>Publish</button>
                { postDetails.message ? <h1>{ postDetails.message }</h1> : null }
            </form>
        </div>
    )
}

export default Post