import React from 'react'
import footerlogo from '../assets/images/logo3.png'

import '../App.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
   <footer className="footer-container">
      <div className="footer-content">
        <img src={footerlogo} alt="Little Lemon" className="footer-logo" />
        
        <nav className="footer-column">
          <h5>Doormat Navigation</h5>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservations">Reservations</Link></li>
          </ul>
        </nav>

        <div className="footer-column">
          <h5>Contact</h5>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>

        <div className="footer-column">
          <h5>Social Media Links</h5>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
    </footer>

    </>
  )
}

export default Footer