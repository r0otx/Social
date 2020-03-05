import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";
const SET_USER_CAPTCHA = "SET_USER_CAPTCHA";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    getCaptcha: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        case SET_USER_CAPTCHA:
            return {
                ...state,
                getCaptcha: action.captchaUrl
            };
        default:
            return state;
    }
};

//Action Creator
export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});

export const setCaptchaActionCreator = (captchaUrl) => ({
    type: SET_USER_CAPTCHA, captchaUrl
});

//Thunks
export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else if (response.data.resultCode === 10) {
        let response = await authAPI.captcha();
        dispatch(setCaptchaActionCreator(response.data.url));
        dispatch(stopSubmit("loginForm", {_error: "Incorrect anti-bot symbols"}));
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("loginForm", {_error: message}));
    }
};

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};

export default authReducer;