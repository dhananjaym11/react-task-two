import { useState } from "react";
import { useDispatch } from 'react-redux';

import { updateLoginAction } from '../../core/actions/login.action';

export default function Login(props) {
    const [user, setUserState] = useState({});
    const dispatch = useDispatch();

    const onChangeInput = (e) => {
        const {name, value} = e.target;
        setUserState({...user, [name]: value});
    }

    const submit = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };

        fetch("https://hbauth.herokuapp.com/login", requestOptions)
            .then((res) => res.json())
            .then((res) => {
                localStorage.setItem('token', res.token);
                dispatch(updateLoginAction(true));
                props.history.push('/');
            })
            .catch((err) => console.log(err));
    }
    
    return (
        <div>
          <p>
            <strong>Username: </strong>
            <input type="text" name="username" value={user.username} onChange={onChangeInput} />
          </p>
          <p>
            <strong>Password: </strong>
            <input type="password" name="password" value={user.password} onChange={onChangeInput} />
          </p>
          <button onClick={submit}>Submit</button>
        </div>
    );
}