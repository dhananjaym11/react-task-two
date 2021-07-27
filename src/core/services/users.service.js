import { loadUsersAction } from '../actions/users.action';

export const loadUsers = () => dispatch => {
    return fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((res) => dispatch(loadUsersAction(res)))
        .catch((err) => console.log(err));
}