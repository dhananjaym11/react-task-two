import { LOAD_USERS } from "../constants";

const loadUsersAction = (data) => ({
    type: LOAD_USERS,
    payload: data
});

export { loadUsersAction };