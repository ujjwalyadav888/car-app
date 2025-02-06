import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>Cars</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search your car..."
        />
        <button>Search</button>
      </div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar