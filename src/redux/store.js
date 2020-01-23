import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Posts 1', likesCount: 10},
                {id: 2, message: 'Posts 2', likesCount: 15},
                {id: 3, message: 'Posts 3', likesCount: 20},
                {id: 4, message: 'Posts 4', likesCount: 25}
            ],
            newPostText: 'New Text Data'
        },
        messagesPage: {
            usersItem: [
                {id: 1, name: 'Kostya'},
                {id: 2, name: 'Alexandr'},
                {id: 3, name: 'Fedor'},
                {id: 4, name: 'Andrey'},
                {id: 5, name: 'Maxim'}
            ],
            messagesItem: [
                {id: 1, message: 'Message1'},
                {id: 2, message: 'Message2'},
                {id: 3, message: 'Message3'},
                {id: 4, message: 'Message4'},
                {id: 5, message: 'Message5'}
            ],
            newMessageText: 'Hello my fried'
        }
    },
    getState() {
        return this._state;
    },
    _rerender() {
        console.log('State is changed');
    },
    subscribe(observer) {
        this._rerender = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messageReducer(this._state.messagesPage, action);
        this._rerender(this._state);
    }
}

export default store;