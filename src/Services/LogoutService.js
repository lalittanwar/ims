
import React from 'react';
import LoginService from './LoginService';
import Cookies from 'universal-cookie';

class LogoutService extends React.Component {

    constructor() {
        super()
        this.loginService = new LoginService();
        this.cookies = new Cookies();
        this.REACT_APP_ROOT_URL = process.env.REACT_APP_ROOT_URL;
        this.REACT_APP_ROOT_CONTEXT = process.env.REACT_APP_ROOT_CONTEXT;
    }

    logout = () => {
        this.removeToken();
        let loginURL = this.REACT_APP_ROOT_URL+"#/login";
        window.location.href = loginURL;
        window.location.reload();
    }

    removeToken = () => {
        this.cookies.remove(this.loginService.getLoginTokenKey(), { path: this.REACT_APP_ROOT_CONTEXT });
    }
}

export default LogoutService;