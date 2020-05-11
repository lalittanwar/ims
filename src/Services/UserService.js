import RequestService from './RequestService';
import React from 'react'

class UserService extends React.Component {

    constructor() {
        super();
        this.requestService = new RequestService();
    }

    userHasWritePermission = () => {
        return true;
    }

    userHasReadPermission = () => {
        return true;
    }
}

export default UserService;