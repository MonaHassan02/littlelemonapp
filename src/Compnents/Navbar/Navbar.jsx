import React from 'react'
import logo from '../../assets/images/logo.jpg'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
<header className='nav-container'>
     <nav className='navbar'>
     <div className="nav-logo">
     <NavLink to="/" aria-label="Go to Home Page">
            <img src={logo} alt="Little Lemon Logo" height={60} width={160}/>
          </NavLink>        </div>
        <ul className='nav-links'>
        <li><NavLink to="/">Home </NavLink></li>
       <li><NavLink to="/about">About us</NavLink></li>
       <li> <NavLink to="/menu">Menu </NavLink></li>
       <li><NavLink to="/reserve">Reservation</NavLink></li>
       <li><NavLink to="/Order">Order online</NavLink></li>
       <li><NavLink to="/login"className="nav-login-btn"> Login</NavLink></li>
        </ul>
       
        </nav>
        </header>
    </>
  )
}

export default Navbar