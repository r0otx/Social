const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {
    messagesItem: [
        {id: 1, message: 'Message1'},
        {id: 2, message: 'Message2'},
        {id: 3, message: 'Message3'},
        {id: 4, message: 'Message4'},
        {id: 5, message: 'Message5'}
    ],
    newMessageText: 'Hello my fried'
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageText
            }
            return {
                ...state,
                messagesItem: [...state.messagesItem, newMessage],
                newMessageText: ''
            };

        case UPDATE_MESSAGE_TEXT:
            return  {
                ...state,
                newMessageText: action.newText
            };

        default: return state;
    }
}

export const addMessage = () => {
    return {
        type: ADD_MESSAGE
    }
}
export const addMessageText = (message) => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        newText: message
    }
}

export default messageReducer;