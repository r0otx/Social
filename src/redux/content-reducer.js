import {getAuthUserData} from "./auth-reducer";

const SET_INITIALIZED = "SET_INITIALIZED";

let initialState = {
    initialized: false
};

const contentReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
};

//Action Creator
export const setInitialized = () => ({type: SET_INITIALIZED});

//Thunks
export const getInitialized = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    promise.then(() => {
        dispatch(setInitialized());
    })
};

export default contentReducer;