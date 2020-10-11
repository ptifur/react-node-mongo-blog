import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <h2>Ptifur</h2>
            <ul>
                <li><Link to="/">Blog</Link></li>
                <li><Link to="/register">New post</Link></li>
            </ul>
        </nav>
    )
}

export default Nav