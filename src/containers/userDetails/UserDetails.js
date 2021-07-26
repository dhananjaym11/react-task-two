import { useState, useEffect } from "react";

import Loader from '../../components/loader/Loader';

export default function UserDetails(props) {
    const [user, setUser] = useState({});
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        getProfile(props);
    }, []);

    const getProfile = (props) => {
        const userId = props.match.params.id;
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then((res) => res.json())
            .then((res) => {
                setLoader(false);
                setUser(res);
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className="users-details">
            <Loader show={loader} />
            <img src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`} width="50" alt={user.name} />
            <h4 style={{display: "inline-block", verticalAlign: 'top' }}>Name : {user.name}</h4>
        </div>
    );
}