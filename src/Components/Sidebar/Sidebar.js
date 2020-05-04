import React,{Component} from 'react'
import './Sidebar.css';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram,faUser, faDigitalTachograph, faEnvelopeOpenText,faMeteor,faDatabase} from '@fortawesome/free-solid-svg-icons';
import UrlUtils from '../../Utils/UrlUtils';


export class Sidebar extends Component {

    constructor(){
        super();
    }
    render() {
        return (
            <div  className="list-group w-100 h-100">
                <Link to="/?active=dashboard">
                    <div className="list-group-item">
                        <span className="mr-1"><FontAwesomeIcon icon={faMeteor} /></span> Dashboard
                    </div>
                </Link>
                <Link to="/product?active=product">
                    <div className="list-group-item">
                        <span className="mr-1"><FontAwesomeIcon icon={faProjectDiagram} /></span> Product
                    </div>
                </Link>
                <Link to="/brand?active=brand">
                    <div className="list-group-item">
                        <span className="mr-1"><FontAwesomeIcon icon={faDatabase} /></span> Brand
                    </div>
                </Link>
                <div className="list-group-item">
                    <span className="mr-1"><FontAwesomeIcon icon={faDatabase} /></span> Overview
                </div>
                <div className="list-group-item">
                    <span className="mr-1"><FontAwesomeIcon icon={faEnvelopeOpenText} /></span> Event
                </div>
                <div className="list-group-item">
                    <span className="mr-1"><FontAwesomeIcon icon={faUser} /></span> Profile
                </div>
                <div className="list-group-item">
                    <span className="mr-1"><FontAwesomeIcon icon={faDigitalTachograph} /></span> Status
                </div>
            </div>
        )
    }
}

export default Sidebar
