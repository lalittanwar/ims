import React,{Component} from 'react'
import './Sidebar.css';
import {Link} from 'react-router-dom'


export class Sidebar extends Component {
    render() {
        return (
            <div  className="list-group w-100">
                <Link to="/">
                    <div className="list-group-item centerText">Dashboard</div>
                </Link>
                <Link to="/product">
                    <div className="list-group-item centerText">Products</div>
                </Link>
                <Link to="/brand">
                    <div className="list-group-item centerText">Brand</div>
                </Link>
                <div className="list-group-item centerText">Overview</div>
                <div className="list-group-item centerText">Events</div>
                <div className="list-group-item centerText">Profile</div>
                <div className="list-group-item centerText">Status</div>
            </div>
        )
    }
}

export default Sidebar
