import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { updateLoginAction } from '../../core/actions/login.action';

const Header = withRouter((props) => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.isLoggedIn);

    const onLogout = () => {
        localStorage.removeItem('token');
        dispatch(updateLoginAction(false));
        props.history.push('/login');
    }

    return (
        <header>
            <Link to={'/'} className="logo" style={{marginBottom: 10}}>Logo</Link>
            <div style={{float: "right"}}>
            {
                isLoggedIn && <button onClick={onLogout}>Logout</button>
            }
            </div>
        </header>
    )
});

export default Header;