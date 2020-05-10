import React, { Component } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import LogoutService from '../../Services/LogoutService';

export class Topbar extends Component {

    constructor() {
        super();
        this.logoutService = new LogoutService();
    }

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-dark bg-dark pr-0 pl-0">
                    <div className="row w-100">
                        <div className="col-8">
                            <a className="navbar-brand" href="/">IMS</a>
                        </div>
                        <div className="col-4 text-right align-self-center pr-0">
                            <div className="text-white cp" onClick={() => this.logoutService.logout()}>  <FontAwesomeIcon icon={faSignOutAlt} /> </div>
                        </div>
                    </div>
                    
                </nav>
            </React.Fragment>
        )
    }
}

export default Topbar
