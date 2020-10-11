import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Hero from './Hero'

const Blog = () => {

    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        const response = await axios.get('/api/blog')
        setPosts(response.data.posts)
    }

    useEffect(() => {
        getPosts()
    }, [])

    // do you need key={index} here
    const allPosts = posts.length > 0 && posts.map((post) => {
        return  <>
                <div className='blogpost'>
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