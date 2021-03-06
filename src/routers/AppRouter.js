import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'
import { Login } from '../components/Login';
import { Dashboard } from '../components/Dashboard';
import { AuthContext } from '../context/AuthContext';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {

  const { user } = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            isAuthenticated={user.logged}
            exact path='/login' component={Login}
          />
          <PrivateRoute
            isAuthenticated={user.logged}
            path="/" component={Dashboard}
          />

        </Switch>
      </div>
    </Router>
  )
}
