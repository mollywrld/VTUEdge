import React from 'react'
import './Navbar.css';
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='nav_links'>
                <div className='nav_logo'>
                    <a href='/'>VTUEdge</a>
                </div>
                <div className='nav_container'>
                    <p><a href='https://results.vtu.ac.in/' target='_blank'>Results</a></p>
                    <p><a href='/about us'>About us</a></p>
                </div>
            </div>
        </div>
    )
}

export default Navbar