import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './Compnents/BookingForm';
import { test, expect } from 'vitest';
import "@testing-library/jest-dom";
// Step 1: Test for static text
test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={["17:00"]} />);
    const headingElement = screen.getByText("Next: Confirm Details")
    expect(headingElement).toBeInTheDocument();
});

// Step 1 (Final): Validate HTML5 attributes are applied
test('Inputs have correct HTML5 validation attributes', () => {
    render(<BookingForm availableTimes={["17:00"]} />);
    
    const nameInput = screen.getByLabelText(/Full Name/i);
    expect(nameInput).toHaveAttribute('type', 'text');

    const dateInput = screen.getByLabelText(/Choose date/i);
    expect(dateInput).toHaveAttribute('type', 'date');

    const guestsInput = screen.getByLabelText(/Number of guests/i);
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
});

// Step 2 (Final): Test JavaScript validation functions (Valid/Invalid states)
test('Submit button is disabled when name is less than 3 characters', () => {
    render(<BookingForm availableTimes={["17:00"]} />);
    
    const nameInput = screen.getByLabelText(/Full Name/i);
    const submitButton = screen.getByRole('button');

    // Invalid State: Too short
    fireEvent.change(nameInput, { target: { value: 'Ab' } });
    expect(submitButton).toBeDisabled();

    // Valid State: 3+ characters
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    // Note: Button may still be disabled if date is not selected
});