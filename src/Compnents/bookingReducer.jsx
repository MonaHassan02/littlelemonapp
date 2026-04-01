// Function to initialize times for today's date
export const initializeTimes = () => {
    const today = new Date();
    // fetchAPI is provided by the script tag in index.html
    return window.fetchAPI ? window.fetchAPI(today) : ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

// Function to update times when a user selects a new date
export const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            const selectedDate = new Date(action.date);
            return window.fetchAPI ? window.fetchAPI(selectedDate) : state;
        default:
            return state;
    }
};