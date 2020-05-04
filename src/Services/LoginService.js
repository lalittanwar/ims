import React from 'react'

class LoginService extends React.Component {

    constructor() {
        super()
    }

    getLoginTokenKey = () => {
        return 'jwt';
    }

    requestToLoginUser = (userObj) => {
        //TODO : Update this logic and get token from backend
        if(userObj!=null && userObj['password']=='admin' && userObj['email']=='admin@gmail.com'){
            this.onLoginSuccess();
            return Promise.resolve("Logged in succesful");
        }else{
            return Promise.reject("Logged in failed, Enter valid credentials");
        }
    }

    onLoginSuccess = () => {
        localStorage.setItem(this.getLoginTokenKey(), 'IMS-User');
    }

    isUserLoggedIn = () => {
        if (localStorage.getItem(this.getLoginTokenKey())) {
            return true;
        }
        return false;
    }
}

export default LoginService;