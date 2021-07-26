import { useState, useEffect } from "react";

import User from '../../components/user/User';

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((res) => setUsers(res))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="users">
        {
            users.map(user =>
                <div key={user.id}>
                    <User {...user} />
                </div>
            )
        }
    	</div>
  	);
}