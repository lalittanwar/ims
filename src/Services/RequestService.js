import axios from 'axios';
import React from 'react'
import { Redirect } from 'react-router-dom';
import LoginService from './LoginService';

class RequestService extends React.Component {

    constructor() {
        super();
        this.loginService = new LoginService();
    }

    getRequest = function (url) {
        const token = this.loginService.getLoginTokenKey();
        const headers = {
            'token': `${token}`,
            'Content-Type': 'application/json'
        };
        return axios.get(url, { headers })
            .then(response => { return Promise.resolve(response.data) })
            .catch(error => this.errorHandler(error));
    }

    postRequest = function (url, object) {
        return axios.post(url, object)
            .then(response => { return Promise.resolve(response.data) })
            .catch(error => this.errorHandler(error));
    }

    deleteRequest = function (url, object) {
        return axios({
            method: 'delete',
            url: url,
            data: object
        })
            .then(response => { return Promise.resolve(response.data) })
            .catch(error => this.errorHandler(error));
    }

    updateRequest = function (url, object) {
        return axios({
            method: 'put',
            url: url,
            data: object
        })
            .then(response => { return Promise.resolve(response.data) })
            .catch(error => this.errorHandler(error));
    }

    errorHandler = function (error) {
        alert(error)
        const response = error.response;
        if (response && response!=undefined) {
            const statusCode = error.response.status;
            if (statusCode && statusCode == 401)
                return <Redirect to="/login" />
        }
        return Promise.reject(error);
    }
}

export default RequestService;
