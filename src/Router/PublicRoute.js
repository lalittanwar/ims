import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import LoginService from '../Services/LoginService';

var loginService = new LoginService()

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            loginService.isUserLoggedIn() && restricted ?
                <Redirect to="/" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;