import React, { useState } from 'react';
import BookingForm from '../Compnents/BookingForm'; 
import '../App.css'; 

const BookingPage = ({ availableTimes, dispatch, submitForm }) => {
    const [step, setStep] = useState(1);
    const [tempData, setTempData] = useState({});

    // Step 1 -> Step 2
    const handleFormSubmit = (data) => {
        setTempData(data);
        setStep(2); 
    };

    // Step 2 -> Step 3
    const handleFinalConfirm = () => {
        const success = submitForm(tempData); // This usually calls the API
        if (success) {
            setStep(3);
        }
    };

    return (
        <main className="booking-container">
            {/* Progress Bar */}
            <div className="progress-container">
                <div className={`step-circle ${step >= 1 ? 'active' : ''}`}>
                    {step > 1 ? "✓" : "1"}
                </div>
                <div className="step-line"></div>
                <div className={`step-circle ${step >= 2 ? 'active' : ''}`}>
                    {step > 2 ? "✓" : "2"}
                </div>
                <div className="step-line"></div>
                <div className={`step-circle ${step >= 3 ? 'active' : ''}`}>
                    {step === 3 ? "✓" : "3"}
                </div>
            </div>

            {step === 1 && (
                <section className="form-wrapper">
                    <h1>Reserve a Table</h1>
                    <BookingForm 
                        availableTimes={availableTimes} 
                        dispatch={dispatch} 
                        submitForm={handleFormSubmit} 
                    />
                </section>
            )}

            {step === 2 && (
                <section className="confirm-section">
                    <h1>Confirm Your Details</h1>
                    <div className="summary-card">
                        <p><strong>Name:</strong> {tempData.fullName}</p>
                        <p><strong>Date:</strong> {tempData.date}</p>
                        <p><strong>Time:</strong> {tempData.time}</p>
                        <p><strong>Guests:</strong> {tempData.guests} People</p>
                        <p><strong>Occasion:</strong> {tempData.occasion}</p>
                    </div>
                    <div className="btn-group">
                        <button className="btn-primary" onClick={handleFinalConfirm}>
                            Confirm Booking
                        </button>
                        <button className="btn-secondary" onClick={() => setStep(1)}>
                            Back to Edit
                        </button>
                    </div>
                </section>
            )}

            {step === 3 && (
                <section className="success-section text-center">
                    <h1>Reservation Confirmed!</h1>
                    <p>Thank you, {tempData.fullName}! We look forward to seeing you on {tempData.date}.</p>
                    <button className="btn-primary" onClick={() => window.location.href = '/'}>
                        Back to Home
                    </button>
                </section>
            )}
        </main>
    );
};

export default BookingPage;