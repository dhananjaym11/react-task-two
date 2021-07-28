import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

import Loader from '../../components/loader/Loader';

export default function UserDetails(props) {
    const [user, setUser] = useState({});
    const users = useSelector(state => state.users);

    useEffect(() => {
        getProfile(props);
    }, [props]);

    const getProfile = (props) => {
        const userId = +props.match.params.id;
        const id = users.findIndex(user => user.id === userId);
        if(id > -1) {
            setUser(users[id]);
        } else {
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
                .then((res) => res.json())
                .then((res) => setUser(res))
                .catch((err) => console.log(err));
        }
    }

    return (
        <div className="users-details">
            {typeof user.name === 'undefined' ? 
            <Loader /> : 
            <>
            <img src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`} width="50" alt={user.name} />
            <h4 style={{display: "inline-block", verticalAlign: 'top' }}>Name : {user.name}</h4>
            </>
            }
        </div>
    );
}