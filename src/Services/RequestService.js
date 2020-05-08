import axios from 'axios';
import React from 'react'

class RequestService extends React.Component {

    constructor() {
        super();
    }

    getRequest = function (url) {
        const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJDb0l6N3IxckJvM0N3dTd5c3A2SnJRPT0iLCJjb250YWN0IjoiMkY0ZDJIanpzd0VoangrWmszSGlyQT09IiwibmFtZSI6Ik5hcnBhdCIsImlkIjoxLCJleHAiOjE1ODg5NDg0MTksImlhdCI6MTU4ODkzMDQxOSwiZW1haWwiOiJDb0l6N3IxckJvM0N3dTd5c3A2SnJRPT0ifQ.XGEhJxkRSiC1U6EtEKBMc18j-xaX7PS40QiN7KsRLphlbO-Fykpmq01JAJgh71y3YlkqqkVtVE8UNF5kYRSEZA';
        const headers = { 
            'token': `${token}` ,
            'Content-Type':'application/json'
            };
        console.log('headers',headers)
        return axios.get(url, {headers})
            .then(response => { return Promise.resolve(response.data) })
            .catch(error => { return Promise.reject(error) });
    }

    postRequest = function (url, object) {
        return axios.post(url, object)
            .then(response => {
                return Promise.resolve(response.data);
            })
            .catch(error => {
                return Promise.reject(error);
            });
    }

    deleteRequest = function (url, object) {
        return axios({
            method: 'delete',
            url: url,
            data: object
        })
            .then(response => { return Promise.resolve(response.data) })
            .catch(error => { return Promise.reject(error) });
    }

    updateRequest = function (url, object) {
        return axios({
            method: 'put',
            url: url,
            data: object
        })
            .then(response => { return Promise.resolve(response.data) })
            .catch(error => { return Promise.reject(error) });
    }
}

export default RequestService;
