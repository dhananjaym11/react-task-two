import { LOAD_USERS } from "../constants";

const INITIAL_STATE = []

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_USERS:
            return [ ...state, ...action.payload ];
        default:
            return state;
    }
}

export default reducer;