import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import LoginService from '../Services/LoginService';

var loginService = new LoginService()
var REACT_APP_ROOT_CONTEXT = process.env.REACT_APP_ROOT_CONTEXT;

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            loginService.isUserLoggedIn() && restricted ?
                <Redirect to={REACT_APP_ROOT_CONTEXT} />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;