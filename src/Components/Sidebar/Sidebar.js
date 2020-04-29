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
            <div  class="list-group" style={sideBar}>
                <Link to="/">
                    <a style={centerText} class="list-group-item ">Dashboard</a>
                </Link>
                <Link to="/product">
                    <a style={centerText} class="list-group-item ">Products</a>
                </Link>
                <Link to="/brand">
                    <a style={centerText} class="list-group-item ">Brand</a>
                </Link>
                <a style={centerText} class="list-group-item ">Overview</a>
                <a style={centerText} class="list-group-item ">Events</a>
                <a style={centerText} class="list-group-item ">Profile</a>
                <a style={centerText} class="list-group-item ">Status</a>
            </div>
        )
    }
}

export default Sidebar
