import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import User from '../../components/user/User';
import EditUser from '../../components/user/EditUser';
import Loader from '../../components/loader/Loader';
import { updateUserAction, deleteUserAction } from '../../core/actions/users.action';
import * as userService from '../../core/services/users.service';

export default function Users() {
    const [showModal, toggleModal] = useState(false);
    const [selectedUser, updateSelectedUser] = useState({});
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        if(users.length === 0) {
            dispatch(userService.loadUsers());
        }
    }, [users,dispatch]);

    const onEdit = (data) => {
        toggleModal(!showModal);
        updateSelectedUser(data);
    }

    const onDelete = (id) => {
        dispatch(deleteUserAction(id));
    }

    const onSubmit= (data) => {
        dispatch(updateUserAction(data));
        toggleModal(!showModal);
    }

    return (
        <div className="users">
            {users.length === 0 && <Loader />}
            {
                users.map(user =>
                    <div key={user.id}>
                        <User {...user} onDelete={onDelete} onEdit={onEdit} />
                    </div>
                )
            }
            <EditUser 
                user={{...selectedUser}} 
                showModal={showModal} 
                toggleModal={toggleModal}
                onSubmit={onSubmit}
             />
    	</div>
  	);
}