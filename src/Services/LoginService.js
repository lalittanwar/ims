import React from 'react'
import axios from 'axios';
import Cookies from 'universal-cookie';


class LoginService extends React.Component {

    constructor() {
        super();
        this.cookies = new Cookies();
        this.token_cookie_name = "IMS_LOGIN_TOKEN";
    }

    getLoginTokenKey = () => {
        return this.token_cookie_name;
    }

    getLoginToken = () => {
        let tokenData =  this.cookies.get(this.token_cookie_name);
        return tokenData!=null ? tokenData.data : null;
    }

    requestToLoginUser = (userObj) => {
        if (userObj != null) {
            const url = process.env.REACT_APP_API_LOGIN_URL;
            this.postRequest(url, userObj)
                .then(token => this.onLoginSuccess(token))
                .catch(error => this.onLoginFailed(error));
        }
    }

    postRequest = function (url, object) {
        return axios({
            method: 'POST',
            url: url,
            data: object
        })
            .then(response => { return Promise.resolve(response) })
            .catch(error => { return Promise.reject(error) });
    }

    onLoginSuccess = (token) => {
        this.cookies.set(this.token_cookie_name, token, { path: '/' });
        window.location.href = "/";
    }

    onLoginFailed = (error) => {
       if(error.response){
           const statusCode = error.response.status;
           if(statusCode==400){
               alert("Enter valid caredentials");
           }else{
                alert("Somthing went wrong please try leter");
           }
       }
    }

    isUserLoggedIn = () => {
        if (this.getLoginToken()) {
            return true;
        }
        return false;
    }
}

export default LoginService;