const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    messagesItem: [
        {id: 1, message: 'Message1'},
        {id: 2, message: 'Message2'},
        {id: 3, message: 'Message3'},
        {id: 4, message: 'Message4'},
        {id: 5, message: 'Message5'}
    ]
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: action.newMessage
            };
            return {
                ...state,
                messagesItem: [...state.messagesItem, newMessage]
            };
        default: return state;
    }
};

export const addMessage = (newMessage) => {
    return {
        type: ADD_MESSAGE, newMessage
    }
};

export default messageReducer;