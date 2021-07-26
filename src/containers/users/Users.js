import { useState, useEffect } from "react";

import User from '../../components/user/User';
import Loader from '../../components/loader/Loader';

export default function Users() {
    const [users, setUsers] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((res) => {
                setLoader(false);
                setUsers(res);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="users">
        <Loader show={loader} />
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