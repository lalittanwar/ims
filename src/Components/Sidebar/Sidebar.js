import React,{Component} from 'react'
import './Sidebar.css';
import {Link} from 'react-router-dom'

export class Sidebar extends Component {
    render() {
        const sideBar = {
            width: '100%'
        }
        const centerText = {
            textAlign: 'center',
            color: 'white',
            borderRadius: '0'   
        }

        return (
            <div  className="list-group" style={sideBar}>
                <Link to="/">
                    <div style={centerText} className="list-group-item ">Dashboard</div>
                </Link>
                <Link to="/product">
                    <div style={centerText} className="list-group-item ">Products</div>
                </Link>
                <Link to="/brand">
                    <div style={centerText} className="list-group-item ">Brand</div>
                </Link>
                <div style={centerText} className="list-group-item ">Overview</div>
                <div style={centerText} className="list-group-item ">Events</div>
                <div style={centerText} className="list-group-item ">Profile</div>
                <div style={centerText} className="list-group-item ">Status</div>
            </div>
        )
    }
}

export default Sidebar
