import { useState, useEffect } from "react";
import { Modal } from 'antd';

export default function EditUser(props) {
    const [user, setUserState] = useState(props.user);

    useEffect(() => {
        setUserState(props.user);
    }, [props]);

    const onChangeInput = (e) => {
        const {name, value} = e.target;
        setUserState({...user, [name]: value});
    }
    
    return (
        <div>
        <Modal title="Basic Modal" visible={props.showModal} onOk={()=>props.onSubmit(user)} onCancel={()=>props.toggleModal(!props.showModal)}>
          <p>
            <strong>Name: </strong>
            <input type="text" name="name" value={user.name} onChange={onChangeInput} />
          </p>
          <p>
            <strong>Email: </strong>
            <input type="text" name="email" value={user.email} onChange={onChangeInput} />
          </p>
          </Modal>
        </div>
    );
}