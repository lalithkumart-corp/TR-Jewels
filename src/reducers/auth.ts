import { LOGGED_IN_SUCCESS, LOGGED_OUT_SUCCESS, LOGIN_FAILURE, MARK_AUTH_TRUE } from '../constants';

const initialState = {
    isAuthenticated: false,
    userName: "",
    userData: null
};
export const authReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch(action.type) {
        case LOGGED_IN_SUCCESS:
            newState.userName = action.payload;
            newState.isAuthenticated = true;
            newState.userData = action.payload;
            break;
        case MARK_AUTH_TRUE: 
            newState.userData = action.payload;
            newState.isAuthenticated = true;
            break;
        case LOGIN_FAILURE:
            newState.isAuthenticated = false;
            break;
        case LOGGED_OUT_SUCCESS:
            newState.userName = "";
            newState.isAuthenticated = false;
            break;
        default:
            return state;
    }
    return newState;
}