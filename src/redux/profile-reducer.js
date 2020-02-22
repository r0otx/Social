import {profileAPI} from "../api/api";
import noAvatar from "../assets/images/noavatar.png";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const UPDATE_USER_STATUS = "UPDATE_USER_STATUS";
const ADD_AVATAR = "ADD_AVATAR";

let initialState = {
    posts: [
        {id: 1, message: 'Posts 1', likesCount: 0, stateLike: false},
        {id: 2, message: 'Posts 2', likesCount: 0, stateLike: false},
        {id: 3, message: 'Posts 3', likesCount: 0, stateLike: false},
        {id: 4, message: 'Posts 4', likesCount: 0, stateLike: false}
    ],
    profile: null,
    status: '',
    avatar: noAvatar
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                message: action.profilePost,
                likesCount: 0,
                stateLike: false
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        case ADD_AVATAR:
            let newAvatar = {
                avatar: action.avatarFile
            };
            return {
                ...state,
                avatar: [...state.avatar, newAvatar]
            };
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case UPDATE_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}

//Action Creators
export const addPostActionCreator = (profilePost) => {
    return {
        type: ADD_POST, profilePost
    }
};
export const addAvatarActionCreator = (avatarFile) => {
    return {
        type: ADD_AVATAR, avatarFile
    }
};
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE, profile
    }
};
export const setUserStatus = (status) => {
    return {
        type: SET_USER_STATUS, status
    }
};

//Thunks
export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    })
};

export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setUserStatus(response.data));
    })
};

export const getUserAvatar = (avatarFile) => (dispatch) => {
    profileAPI.updatePhoto(avatarFile).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(addAvatarActionCreator(response.data.data.photos.small));
        }
    })
};

export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    })
};

export default profileReducer;