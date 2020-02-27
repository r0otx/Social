import {messageAPI} from "../api/api";

const ADD_MESSAGE = "ADD_MESSAGE";
const ADD_USER = "ADD_USER";
const GET_USERS = "GET_USERS";
const GET_MESSAGES = "GET_MESSAGES";
const SELECT_USER = "SELECT_USER";
const MESSAGES_COUNT = "MESSAGES_COUNT";

let initialState = {
    usersItem: [],
    messagesItem: [],
    selectedUserId: null,
    messagesCount: null
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:

            let newMessage = {
                id: action.newMessage.data.message.id,
                body: action.newMessage.data.message.body,
                translatedBody: action.newMessage.data.message.translatedBody,
                addedAt: action.newMessage.data.message.addedAt,
                senderId: action.newMessage.data.message.senderId,
                senderName: action.newMessage.data.message.senderName,
                recipientId: action.newMessage.data.message.recipientId,
                recipientName: action.newMessage.data.message.recipientName,
                viewed: action.newMessage.data.message.viewed,
                deletedBySender: action.newMessage.data.message.deletedBySender,
                deletedByRecipient: action.newMessage.data.message.deletedByRecipient,
                isSpam: action.newMessage.data.message.isSpam,
                distributionId: action.newMessage.data.message.distributionId
            };
            return {
                ...state,
                messagesItem: [...state.messagesItem, newMessage]
            };
        case GET_MESSAGES:
            return {
                ...state,
                messagesItem: action.messages
            };
        case ADD_USER:
            let addDialog = {
                id: action.userId,
                userName: action.userName,
                hasNewMessages: false,
                lastDialogActivityDate: null,
                lastUserActivityDate: null,
                newMessagesCount: null,
                photos: {
                    small: null,
                    large: null
                }
            };
            return {
                ...state,
                usersItem: [addDialog, ...state.usersItem]
            };
        case GET_USERS:
            return {
                ...state,
                usersItem: action.users
            };
        case SELECT_USER:
            return {
                ...state,
                selectedUserId: action.userId
            };
        case MESSAGES_COUNT:
            return {
                ...state,
                messagesCount: action.count
            };
        default:
            return state;
    }
};

//Action Creators
export const addNewChat = (userId, userName) => {
    return {
        type: ADD_USER, userId, userName
    }
};

export const getUsers = (users) => {
    return {
        type: GET_USERS, users
    }
};

export const getMessages = (messages) => {
    return {
        type: GET_MESSAGES, messages
    }
};

export const addMessage = (newMessage) => {
    return {
        type: ADD_MESSAGE, newMessage
    }
};

export const selectUser = (userId) => {
    return {
        type: SELECT_USER, userId
    }
};

export const messagesCount = (count) => {
    return {
        type: MESSAGES_COUNT, count
    }
};

//Thunks
export const startNewChat = (userId, userName) => (dispatch) => {
    messageAPI.startChat(userId).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(addNewChat(userId, userName));
        }
    })
};

export const getAllUsersChat = () => (dispatch) => {
    messageAPI.getUsersChat().then(response => {
        dispatch(getUsers(response.data));
    })
};

export const getAllMessages = (userId) => (dispatch) => {
    messageAPI.getMessagesChat(userId).then(response => {
        dispatch(getMessages(response.data.items));
    })
};

export const sendNewMessage = (userId, message) => (dispatch) => {
    messageAPI.sendMessage(userId, message).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(addMessage(response.data));
        }
    })
};

export const getNewMessagesCount = () => (dispatch) => {
    messageAPI.getNewMessagesCount().then(response => {
            dispatch(messagesCount(response.data));
    })
};

export default messageReducer;