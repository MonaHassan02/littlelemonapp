import React from 'react'
import greekSaladImg from '../assets/images/greekSalad.jpg'
import bruschettaImg from '../assets/images/bruschettaImg.jpg'
import lemonDessertImg from '../assets/images/lemondessert.jpg'

import '../App.css'
const SpecialCard = ({ image, title, price, description }) => (
    <article className="special-card">
      <img src={image} alt={title} className="card-img" />
      <div className="card-content">
        <div className="card-header">
          <h3>{title}</h3>
          <span className="price">{price}</span>
        </div>
        <p>{description}</p>
        <button className="order-btn">Order a delivery <span></span></button>
      </div>
    </article>
  );
const Specials = () => {
  return (
    <>
    <section className="specials-container">
      <div className="specials-top">
        <h1>This weeks specials!</h1>
        <button className="btn-primary">Online Menu</button>
      </div>
      
      <div className="specials-grid">
        <SpecialCard 
          image={greekSaladImg} 
          title="Greek Salad" 
          price="$12.99" 
          description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese..." 
        />
        <SpecialCard 
          image={bruschettaImg} 
          title="Bruschetta" 
          price="$5.99" 
          description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt..." 
        />
        <SpecialCard 
          image={lemonDessertImg} 
          title="Lemon Dessert" 
          price="$5.00" 
          description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic..." 
        />
      </div>
    </section>
    </>
  )
}

export default Specials