import { USER_LOGGED_IN } from "../constants";

const updateLoginAction = (data) => ({
    type: USER_LOGGED_IN,
    payload: data
});

export { updateLoginAction };