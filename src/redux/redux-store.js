import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import dialogUserReducer from "./dialogUser-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    usersItem: dialogUserReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

window.store = store;

export default store;