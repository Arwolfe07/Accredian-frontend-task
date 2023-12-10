const messageReducer = (state = { message: '' }, action) => {
    switch (action.type) {
        case 'SET_MESSAGE':
            return { message: action.message };
        case 'CLEAR_MESSAGE':
            return { message: '' };
        default:
            return state;
    }
}

export default messageReducer;