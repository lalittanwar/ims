import React,{Component} from 'react'
import './Sidebar.css';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram,faSeedling, faPodcast, faFile,faMeteor} from '@fortawesome/free-solid-svg-icons';


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
                        <span className="mr-1"><FontAwesomeIcon icon={faPodcast} /></span> Brand
                    </div>
                </Link>
                <Link to="/attribute?active=attribute">
                    <div className="list-group-item">
                        <span className="mr-1"><FontAwesomeIcon icon={faSeedling} /></span> Attribute
                    </div>
                </Link>
                <Link to="/category?active=brand">
                    <div className="list-group-item">
                        <span className="mr-1"><FontAwesomeIcon icon={faFile} /></span> Category
                    </div>
                </Link>
            </div>
        )
    }
}

export default Sidebar
