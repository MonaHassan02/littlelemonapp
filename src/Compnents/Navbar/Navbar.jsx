import React, { useState } from 'react'; // Added useState
import logo from '../../assets/images/logo.jpg';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='nav-container'>
      <nav className='navbar'>
        <div className="nav-logo">
          <NavLink to="/" aria-label="Go to Home Page">
            <img src={logo} alt="Little Lemon Logo" height={60} width={160}/>
          </NavLink>
        </div>

        {/* Hamburger Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
            <div className={menuOpen ? "bar open" : "bar"}></div>
            <div className={menuOpen ? "bar open" : "bar"}></div>
            <div className={menuOpen ? "bar open" : "bar"}></div>
        </div>

        {/* Mobile-aware links */}
        <ul className={menuOpen ? 'nav-links active' : 'nav-links'}>
          <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About us</NavLink></li>
          <li><NavLink to="/menu" onClick={() => setMenuOpen(false)}>Menu</NavLink></li>
          <li><NavLink to="/reserve" onClick={() => setMenuOpen(false)}>Reservation</NavLink></li>
          <li><NavLink to="/Order" onClick={() => setMenuOpen(false)}>Order online</NavLink></li>
          <li><NavLink to="/login" className="nav-login-btn" onClick={() => setMenuOpen(false)}>Login</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;