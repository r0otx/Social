import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const UPDATE_USER_STATUS = "UPDATE_USER_STATUS";
const ADD_AVATAR = "ADD_AVATAR";
const SET_USER_ABOUT_ME = "SET_USER_ABOUT_ME";

let initialState = {
    posts: [
        {
            id: 1,
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quam urna, auctor quis pellentesque at, lacinia a leo. Nullam at lorem ante. Proin auctor tempus bibendum. Nullam vel ullamcorper tortor. Maecenas ullamcorper commodo est nec bibendum. Aenean id arcu sit amet urna vestibulum lobortis. Curabitur at orci ut massa semper lacinia. Pellentesque nec fermentum nisl, ut mollis lorem. Integer a ipsum auctor, dictum ipsum et, vehicula lorem. Nulla aliquam, risus ut imperdiet sagittis, quam sapien sagittis arcu, at placerat augue orci ut quam. Vivamus varius a nisi at vulputate. Curabitur suscipit commodo velit, at molestie turpis auctor quis. Duis facilisis.',
            likesCount: 0,
            stateLike: false
        },
        {
            id: 2,
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quam urna, auctor quis pellentesque at, lacinia a leo. Nullam at lorem ante. Proin auctor tempus bibendum. Nullam vel ullamcorper tortor. Maecenas ullamcorper commodo est nec bibendum. Aenean id arcu sit amet urna vestibulum lobortis. Curabitur at orci ut massa semper lacinia. Pellentesque nec fermentum nisl, ut mollis lorem. Integer a ipsum auctor, dictum ipsum et, vehicula lorem. Nulla aliquam, risus ut imperdiet sagittis, quam sapien sagittis arcu, at placerat augue orci ut quam. Vivamus varius a nisi at vulputate. Curabitur suscipit commodo velit, at molestie turpis auctor quis. Duis facilisis.',
            likesCount: 0,
            stateLike: false
        },
        {
            id: 3,
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quam urna, auctor quis pellentesque at, lacinia a leo. Nullam at lorem ante. Proin auctor tempus bibendum. Nullam vel ullamcorper tortor. Maecenas ullamcorper commodo est nec bibendum. Aenean id arcu sit amet urna vestibulum lobortis. Curabitur at orci ut massa semper lacinia. Pellentesque nec fermentum nisl, ut mollis lorem. Integer a ipsum auctor, dictum ipsum et, vehicula lorem. Nulla aliquam, risus ut imperdiet sagittis, quam sapien sagittis arcu, at placerat augue orci ut quam. Vivamus varius a nisi at vulputate. Curabitur suscipit commodo velit, at molestie turpis auctor quis. Duis facilisis.',
            likesCount: 0,
            stateLike: false
        },
        {
            id: 4,
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quam urna, auctor quis pellentesque at, lacinia a leo. Nullam at lorem ante. Proin auctor tempus bibendum. Nullam vel ullamcorper tortor. Maecenas ullamcorper commodo est nec bibendum. Aenean id arcu sit amet urna vestibulum lobortis. Curabitur at orci ut massa semper lacinia. Pellentesque nec fermentum nisl, ut mollis lorem. Integer a ipsum auctor, dictum ipsum et, vehicula lorem. Nulla aliquam, risus ut imperdiet sagittis, quam sapien sagittis arcu, at placerat augue orci ut quam. Vivamus varius a nisi at vulputate. Curabitur suscipit commodo velit, at molestie turpis auctor quis. Duis facilisis.',
            likesCount: 0,
            stateLike: false
        }
    ],
    profile: null,
    status: '',
    avatar: null
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
                posts: [newPost, ...state.posts]
            };
        case ADD_AVATAR:
            return {
                ...state,
                avatar: action.avatarFile
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
        case SET_USER_ABOUT_ME: {
            return {
                ...state,
                profile: action.formData
            }
        }
        default:
            return state;
    }
};

//Action Creators
export const addPostActionCreator = (profilePost) => {
    return {
        type: ADD_POST, profilePost
    }
};
export const addAboutMeActionCreator = (formData) => {
    return {
        type: SET_USER_ABOUT_ME, formData
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
export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
    dispatch(addAvatarActionCreator(response.data.photos.large));
};

export const setUserAboutMe = (formData) => async (dispatch) => {
    let response = await profileAPI.setAboutMe(formData);
    if (response.data.resultCode === 1) {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("aboutMeForm", {_error: message}));
    } else {
        dispatch(addAboutMeActionCreator(formData));
    }
};

export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setUserStatus(response.data));
};

export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
};

export const updateUserAvatar = (avatarFile) => async (dispatch) => {
    let response = await profileAPI.updatePhoto(avatarFile);
    if (response.data.resultCode === 0) {
        dispatch(addAvatarActionCreator(response.data.data.photos.large));
    }
};

export default profileReducer;