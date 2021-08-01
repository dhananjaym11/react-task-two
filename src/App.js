import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Login from './containers/login/Login';
import Users from './containers/users/Users';
import UserDetails from './containers/userDetails/UserDetails';
import Header from './components/header/Header';

export default function App() {
    const isLoggedIn = useSelector(state => state.isLoggedIn);

    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/login" component={Login} />
                    { isLoggedIn ? <>
                        <Route exact path="/" component={Users} />
                        <Route exact path="/user/:id" component={UserDetails} />
                        </> :
                        <Redirect to="/login" />
                    }
				</Switch>
			</BrowserRouter>
		</div>
  	);
}