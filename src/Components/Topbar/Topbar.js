import React,{Component} from 'react'

export class Topbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Inventory Management System</a>
                </nav>
            </div>
        )
    }
}

export default Topbar
