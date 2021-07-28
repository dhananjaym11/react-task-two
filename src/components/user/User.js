import { Link } from "react-router-dom";

export default function User(props) {
    return (
        <>
            <Link to={`user/${props.id}`} className="user" style={{marginBottom: 10}}>
                <img src={`https://avatars.dicebear.com/v2/avataaars/${props.username}.svg?options[mood][]=happy`} width="50" alt={props.name} />
                <h4 style={{display: "inline-block", verticalAlign: 'top' }}>Name : {props.name}</h4>
            </Link>
            <button onClick={()=>props.onEdit(props)}>Edit</button>
            <button onClick={()=>props.onDelete(props.id)}>Delete</button>
        </>
    );
}