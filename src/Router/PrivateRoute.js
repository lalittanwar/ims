import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import LoginService from '../Services/LoginService';

var loginService = new LoginService()

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            loginService.isUserLoggedIn() ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;