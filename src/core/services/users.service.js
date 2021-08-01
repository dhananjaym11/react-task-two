import { loadUsersAction } from '../actions/users.action';

export const loadUsers = () => dispatch => {
    const requestOptions = {
        headers: { 'Authorization':  'Bearer ' + localStorage.getItem('token') },
    };
    return fetch("https://hbauth.herokuapp.com/users", requestOptions)
        .then((res) => res.json())
        .then((res) => dispatch(loadUsersAction(res)))
        .catch((err) => console.log(err));
}