import axios from 'axios';
import React from 'react'

class RequestService extends React.Component{

    constructor(){
        super();
    }

    getRequest = function(url){
        return axios.get(url)
        .then(response => { return Promise.resolve(response.data)})
        .catch(error => { return Promise.reject(error)});
    }
    
    postRequest = function(url,object){
        return axios.post(url,object)
        .then(response => { 
            return Promise.resolve(response.data);
        })
        .catch(error => {
            return Promise.reject(error);
        });
    }
    
    deleteRequest = function(url,object){
        return axios.delete(url,object)
        .then(response => { 
            return Promise.resolve(response.data);
        })
        .catch(error => {
            return Promise.reject(error);
        });
    }
    
    updateRequest = function(url,object){
        return axios({
            method: 'put',
            url: url,
            data: object
          })
        .then(response => { 
            return Promise.resolve(response.data);
        })
        .catch(error => {
            return Promise.reject(error);
        });
    }
}

export default RequestService;
