import { USER_LOGGED_IN } from "../constants";

const INITIAL_STATE = localStorage.getItem('token') !== null;

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_LOGGED_IN:
            return action.payload;
        default:
            return state;
    }
}

export default reducer;