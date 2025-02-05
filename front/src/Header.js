import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
        <h1><Link to="/">Quiz Project</Link></h1>
        <nav>
            <ul>
                <li><Link to="">About Quiz</Link></li>
                <li><Link to="">Contact Us</Link></li>
                <li><Link to="/login" className='button'>Login</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header