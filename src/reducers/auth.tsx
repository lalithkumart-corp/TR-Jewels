import { LOGGED_IN_SUCCESS, LOGGED_OUT_SUCCESS } from '../constants';

const initialState = {
    isAuthenticated: false,
    userName: ""
};
export const authReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch(action.type) {
        case LOGGED_IN_SUCCESS:
            newState.userName = action.payload;
            newState.isAuthenticated = true;
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