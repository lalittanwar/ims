import RequestService from './RequestService';
import React from 'react'

class UserService extends React.Component {

    constructor() {
        super();
        this.requestService = new RequestService();
    }

   userHasWriterPermission = function(){
       return Promise.resolve(true);
   }
}

export default UserService;