import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Users from './containers/users/Users';
import UserDetails from './containers/userDetails/UserDetails';

export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Users} />
					<Route exact path="/user/:id" component={UserDetails} />
				</Switch>
			</BrowserRouter>
		</div>
  	);
}