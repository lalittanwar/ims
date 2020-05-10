
import React from 'react';
import LoginService from './LoginService';
import Cookies from 'universal-cookie';

class LogoutService extends React.Component {

    constructor() {
        super()
        this.loginService = new LoginService();
        this.cookies = new Cookies();
    }

    logout = () => {
        this.removeToken();
        window.location.href = "/#/login";
        window.location.reload();
    }

    removeToken = () => {
        this.cookies.remove(this.loginService.getLoginTokenKey());
    }
}

export default LogoutService;