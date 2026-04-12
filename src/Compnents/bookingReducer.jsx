export const initializeTimes = () => {
    const today = new Date();
    return window.fetchAPI ? window.fetchAPI(today) : ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            const selectedDate = new Date(action.date);
            return window.fetchAPI ? window.fetchAPI(selectedDate) : state;
        default:
            return state;
    }
};