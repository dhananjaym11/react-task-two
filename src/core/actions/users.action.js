import { LOAD_USERS, UPDATE_USER, DELETE_USER } from "../constants";

const loadUsersAction = (data) => ({
    type: LOAD_USERS,
    payload: data
});

const updateUserAction = (data) => ({
    type: UPDATE_USER,
    payload: data
});

const deleteUserAction = (id) => ({
    type: DELETE_USER,
    payload: id
});

export { loadUsersAction, updateUserAction, deleteUserAction };