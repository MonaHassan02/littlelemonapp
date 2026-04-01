import React from 'react'
import hero from '../assets/images/hero.jpg'
import '../App.css'
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate(); // 2. Initialize the navigate function

    const handleReserveClick = () => {
        navigate('/reserve');
    };

  return (
    <>
    <section className='hero-container'>
        <div className='hero-content'>
            <h1>
                Little Lemon
            </h1>
            <h2>
                Chicago
            </h2>
            <p>
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist
            </p>
            <button 
  className='btn-primary' 
  onClick={handleReserveClick} // This makes it actually work
  aria-label="Reserve a table" // This helps with accessibility points
>                Reserve a Table
            </button>
        </div>
        <img src={hero} alt="" className='hero-img' />
        </section> 
    </>
  )
}

export default Hero