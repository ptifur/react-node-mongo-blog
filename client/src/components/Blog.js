import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Hero from './partials/Hero'

const Blog = () => {

    const [posts, setPosts] = useState([])

    const [refresh, setRefresh] = useState(false)

    const getPosts = async () => {
        const response = await axios.get('/api/blog')
        setPosts(response.data.posts)
    }

    useEffect(() => {
        getPosts()
    }, [])

    const deletePost = (postId) => {

        const endpoint = `/api/blog/${postId}`

        // do you need response here?
        fetch(endpoint, {
            method: 'DELETE'
        })
        .catch(error => console.log(error))

        setRefresh(true)

    }

    if (refresh) {
        return <Blog />
    }

    const allPosts = posts.length > 0 && posts.map((post) => {
        return  <>
                <div className='blogpost'>
                    <div className='top'>
                        <div className='date'>{post.date}</div>
                        <button className='deleteButton' type='button' onClick={() => { deletePost(post._id) }} >×</button>
                    </div>
                    <h3>{post.title}</h3>
                    <div>{post.text}</div>
                </div>
                </> 
    })

    return (
        <div className='wrapper'>
            {/* <Hero /> */}
            <h2>Here are the posts, I guess...</h2>
            {allPosts}
        </div>
    )
}

export default Blog