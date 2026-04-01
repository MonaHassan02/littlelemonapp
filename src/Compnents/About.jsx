import React from 'react'
import About1 from '../assets/images/Mario and Adrian a.jpg'
import About2 from '../assets/images/Mario and Adrian b.jpg'

import '../App.css'
const About = () => {
  return (
    <>
<section className="about-container">
      <div className="about-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
        Little Lemon Chicago is a family owned Mediterranean restaurant located in the heart of the city. The restaurant is run by brothers Mario and Adrian, who have always had a passion for cooking and serving delicious food. Growing up in a Mediterranean household, the brothers were exposed to traditional recipes from an early age, and they decided to bring those recipes to the masses with a modern twist. At Little Lemon, you can expect to find a menu full of classic dishes with a creative twist that makes them stand out from the rest. Whether you're looking for a quick lunch or a leisurely dinner, Little Lemon Chicago is the perfect place to indulge in a delicious meal in a cozy and welcoming atmosphere
        </p>
      </div>
      <div className="about-images">
        <img src={About1} alt="Mario and Adrian 1" className="img-top" />
        <img src={About2} alt="Mario and Adrian 2" className="img-bottom" />
      </div>
    </section>

    </>
  )
}

export default About