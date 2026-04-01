import React from 'react'
import '../App.css'
import test1 from'../assets/images/Test1.jpg'
import test2 from'../assets/images/Test2.jpg'
import test3 from'../assets/images/test3.jpg'
import test4 from '../assets/images/test4.jpg'
import star from '../assets/images/star.jpg'


const TestimonialCard = ({ rating, image, name, review }) => {
    const starsArray = [...Array(rating)];
  
    return (
      <article className="testimonial-card">
        <div className="stars-container">
          {starsArray.map((_, index) => (
            <img 
              key={index} 
              src={star} 
              alt="star" 
              className="star-icon" 
            />
          ))}
        </div>
        
        <div className="user-info">
          <img src={image} alt={name} className="user-img" />
          <h4>{name}</h4>
        </div>
        
        <p>"{review}"</p>
      </article>
    );
  };
const Testimonial = () => {
  return (
    <>
    <section className="testimonials-container">
      <h2>Testimonials</h2>
      <div className="testimonials-grid">
        <TestimonialCard 
          rating={5} 
          name="Sara L." 
          image={test3}
          review="The Greek Salad was the best I've ever had! Highly recommend." 
        />
        <TestimonialCard 
          rating={4} 
          name="John D." 
          image={test1} 
          review="Amazing atmosphere and even better food. Great for date night." 
        />
        <TestimonialCard 
          rating={5} 
          name="Maria G." 
          image={test2}
          review="The lemon dessert is to die for. I'll be back every week!" 
        />
        <TestimonialCard 
          rating={5} 
          name="Alex P." 
          image={test4}
          review="Authentic flavors and friendly staff. 5 stars all the way." 
        />
      </div>
    </section>
    </>
  )
}

export default Testimonial