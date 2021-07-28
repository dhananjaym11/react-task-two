import { LOAD_USERS, UPDATE_USER, DELETE_USER } from "../constants";

const INITIAL_STATE = []

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_USERS:
            return [ ...state, ...action.payload ];
        case UPDATE_USER:
            const updatedIndex = state.findIndex(user => user.id === action.payload.id);
            return [...state.slice(0,updatedIndex), action.payload, ...state.slice(updatedIndex+1)];
        case DELETE_USER:
            const deletedIndex = state.findIndex(user => user.id === action.payload);
            return [...state.slice(0,deletedIndex), ...state.slice(deletedIndex+1)];
        default:
            return state;
    }
}

export default reducer;