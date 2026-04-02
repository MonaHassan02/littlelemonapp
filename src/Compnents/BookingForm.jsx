import React, { useState } from 'react';
import '../App.css';

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
    const [resData, setResData] = useState({
        fullName: '',
        date: '',
        time: '17:00',
        guests: 1,
        occasion: 'Birthday'
    });
    const [touched, setTouched] = useState(false);

    // Validation Logic (JavaScript side)
    const isNameValid = resData.fullName.trim().length >= 3;
    const isDateValid = resData.date !== '';
    const isGuestsValid = resData.guests >= 1 && resData.guests <= 10;
    
    // The form is only valid if everything passes
    const isFormValid = isNameValid && isDateValid && isGuestsValid;

    const handleSubmit = (e) => {
        e.preventDefault();
        setTouched(true); 
        
        if (isFormValid) {
            submitForm(resData);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="styled-form" aria-label="Booking form">
            
            {/* 1. FULL NAME */}
            <label htmlFor="full-name">Full Name</label>
            <input 
                type="text" 
                id="full-name" 
                placeholder="Enter Your Full Name"
                required 
                minLength="3"
                value={resData.fullName} 
                onChange={(e) => setResData({...resData, fullName: e.target.value})}
                onBlur={() => setTouched(true)}
                className={touched && !isNameValid ? "input-error" : ""}
            />
            {touched && !isNameValid && <span className="error-msg">Name must be at least 3 characters.</span>}

            {/* 2. DATE */}
            <label htmlFor="res-date">Choose date</label>
            <input 
                type="date" 
                id="res-date" 
                required
                value={resData.date} 
                onChange={(e) => {
                    setResData({ ...resData, date: e.target.value });
                    dispatch({ type: 'UPDATE_TIMES', date: e.target.value });
                }}
                onBlur={() => setTouched(true)}
                className={touched && !isDateValid ? "input-error" : ""} 
            />
            {touched && !isDateValid && <span className="error-msg">Please select a date.</span>}

            {/* 3. TIME */}
            <label htmlFor="res-time">Choose time</label>
            <select 
                id="res-time" 
                required
                value={resData.time} 
                onChange={(e) => setResData({...resData, time: e.target.value})}
            >
                {availableTimes && availableTimes.map(t => <option key={t}>{t}</option>)}
            </select>

            {/* 4. GUESTS */}
            <label htmlFor="guests">Number of guests</label>
            <input 
                type="number" 
                id="guests" 
                placeholder="1"
                min="1" 
                max="10" 
                required
                value={resData.guests} 
                onChange={(e) => setResData({...resData, guests: e.target.value})}
                onBlur={() => setTouched(true)}
                className={touched && !isGuestsValid ? "input-error" : ""} 
            />
            {touched && !isGuestsValid && <span className="error-msg">Please enter between 1 and 10 guests.</span>}

            {/* 5. OCCASION */}
            <label htmlFor="occasion">Occasion</label>
            <select 
                id="occasion" 
                value={resData.occasion} 
                onChange={(e) => setResData({...resData, occasion: e.target.value})}
            >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Engagement">Engagement</option>
            </select>

            {/* SUBMIT BUTTON */}
            <button 
                type="submit" 
                className="btn-primary" 
                aria-label="On Click"
                disabled={!isFormValid}            >
                Next: Confirm Details
            </button>
        </form>
    );
};

export default BookingForm;