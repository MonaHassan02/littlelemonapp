import './App.css'
import Navbar from './Compnents/Navbar/Navbar'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './Home'
import BookingPage from './pages/BookingPage'
import About from './pages/About'
import React, { useReducer } from 'react';
import ConfirmedBooking from './pages/ConfirmedBooking'
import { updateTimes, initializeTimes } from './Compnents/bookingReducer'
import Footer from './Compnents/Footer'
function App() {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  const submitForm = (formData) => {
    // Check if API exists, if not, default to true so it doesn't get stuck
    const success = window.submitAPI ? window.submitAPI(formData) : true; 
    
    if (success) {
      navigate('/confirmed');
    } else {
      alert("Submission failed. Please try again.");
    }
  };
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route 
        path="/reserve" 
        element={
          <BookingPage 
            // 2. You MUST pass these 3 props
            availableTimes={availableTimes} 
            dispatch={dispatch} 
            submitForm={submitForm} 
          />
        } 
      />
      <Route path="/confirmed" element={<ConfirmedBooking/>}/>
        

    </Routes>
    
  <Footer/>
    </>
  )
}

export default App
