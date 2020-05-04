import React from 'react';
import LoginService from './LoginService';

class LogoutService extends React.Component {

    constructor() {
        super()
        this.loginService = new LoginService();
    }

    logout = () => {
        localStorage.removeItem(this.loginService.getLoginTokenKey());
    }
}

export default LogoutService;