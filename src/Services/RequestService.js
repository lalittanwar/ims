import axios from 'axios';
import React from 'react'
import LogoutService from './LogoutService';
import LoginService from './LoginService';

class RequestService extends React.Component {

    constructor() {
        super();
        this.logoutService = new LogoutService();
        this.loginService = new LoginService();
    }

    getRequest = function (url) {
        const token = this.loginService.getLoginToken();
        const headers = {
            "token" : token
        };
        return axios({
            method: 'GET',
            url: url,
            headers : headers
            
        })
            .then(response => { return Promise.resolve(response.data) })
            .catch(error => this.handleError(error));
    }

    postRequest = function (url, object) {
        const token = this.loginService.getLoginToken();
        const headers = {
            "token" : token
        };
        return axios({
            method: 'POST',
            url: url,
            data: object,
            headers : headers
        })
            .then(response => { return Promise.resolve(response.data) })
            .catch(error => this.handleError(error));
    }

    deleteRequest = function (url, object) {
        const token = this.loginService.getLoginToken();
        const headers = {
            "token" : token
        };
        return axios({
            method: 'DELETE',
            url: url,
            data: object,
            headers : headers
        })
            .then(response => { return Promise.resolve(response.data) })
            .catch(error => this.handleError(error));
    }

    updateRequest = function (url, object) {
        const token = this.loginService.getLoginToken();
        const headers = {
            "token" : token
        };
        return axios({
            method: 'PUT',
            url: url,
            data: object,
            headers : headers
        })
            .then(response => { return Promise.resolve(response.data) })
            .catch(error => this.handleError(error));
    }

    handleError = (error) => {
        const response = error.response;
        if (response && response != undefined) {
            const status = response.status;
            if (status && status != undefined && status == 401) {
                this.logoutService.logout();
            } else {
                return Promise.reject(error);
            }
        } else {
            return Promise.reject(error);
        }
    }
}

export default RequestService;