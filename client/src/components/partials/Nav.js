import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='navbar'>
            <div className='title'>Ptifur</div>
            <div className='menu'>
                <li><Link to="/">Blog</Link></li>
                <li><Link to="/post">New post</Link></li>
            </div>
        </div>
    )
}

export default Nav