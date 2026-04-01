import React from 'react';
import successIcon from '../assets/images/success.png'; 
import '../App.css'

const ConfirmedBooking = () => {
    return (
        <main className="booking-container">
            {/* Hard-coded Step 3 Progress Bar */}
            <div className="progress-container">
                <div className="step-circle active">✓</div>
                <div className="step-line"></div>
                <div className="step-circle active">✓</div>
                <div className="step-line"></div>
                <div className="step-circle active">3</div>
            </div>

            <div className="success-page">
                <img src={successIcon} alt="Success" className="success-img" />
                <h1>Booking Confirmed!</h1>
                <p>We've received your reservation. A confirmation email has been sent.</p>
                <button className="btn-primary" onClick={() => window.location.href = "/"}>
                    Return Home
                </button>
            </div>
        </main>
    );
};

export default ConfirmedBooking;