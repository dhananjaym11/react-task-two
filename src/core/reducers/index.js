import { combineReducers } from 'redux';

import usersReducer from './users.reducer';
import loginReducer from './login.reducer';

const rootReducer = combineReducers({
    users: usersReducer,
    isLoggedIn: loginReducer
});

export default rootReducer;