import { initializeTimes, updateTimes } from './Compnents/bookingReducer';
import { test, expect } from 'vitest';

// Step 1 & 2: Test initializeTimes
test('initializeTimes returns a non-empty array of times', () => {
    const initialState = initializeTimes();
    // Since fetchAPI is now used, we expect an array
    expect(Array.isArray(initialState)).toBe(true);
    expect(initialState.length).toBeGreaterThan(0);
});

// Step 2: Test updateTimes
test('updateTimes returns the same value provided in the state', () => {
    const initialState = ["17:00", "18:00"];
    const action = { type: 'UPDATE_TIMES', date: '2026-04-01' };
    const newState = updateTimes(initialState, action);
    
    // Per instructions, it should return the same value for now
    expect(newState).toEqual(initialState);
});