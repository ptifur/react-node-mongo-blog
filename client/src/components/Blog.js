import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Hero from './partials/Hero'

const Blog = () => {

    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        const response = await axios.get('/api/blog')
        setPosts(response.data.posts)
    }

    useEffect(() => {
        getPosts()
    }, [])

    const deletePost = (postIdee) => {

        const endpoint = `/api/blog/${postIdee}`
        // console.log(endpoint)

        // do you need this response.json() though?
        fetch(endpoint, {
            method: 'DELETE'
        })
        // .then(response => {
        //     console.log('deleted...')
        // })
        .catch(error => console.log(error))

    }

    // set _id as a key={index} !!!
    const allPosts = posts.length > 0 && posts.map((post) => {
        return  <>
                <div className='blogpost'>
                    <button className='deleteButton' type='button' onClick={() => { deletePost(post._id) }} >delete</button>
                    {post._id}
                    <div className='date'>{post.date}</div>
                    <h3>{post.title}</h3>
                    <div>{post.text}</div>
                </div>
                </> 
    })

    return (
        <div className='wrapper'>
            <Hero />
            <h2>Here are the posts, I guess...</h2>
            {allPosts}
        </div>
    )
}

export default Blog