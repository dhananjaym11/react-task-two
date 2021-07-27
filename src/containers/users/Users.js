import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import User from '../../components/user/User';
import Loader from '../../components/loader/Loader';
import * as userService from '../../core/services/users.service';

export default function Users() {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userService.loadUsers());
    }, [dispatch]);

    return (
        <div className="users">
            {users.length && <Loader />}
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