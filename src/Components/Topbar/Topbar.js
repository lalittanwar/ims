import React,{Component} from 'react'

export class Topbar extends Component {

    constructor(){
        super()
    }

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-dark  bg-dark">
                    <a className="navbar-brand" href="/">IMS</a>
                </nav>
            </React.Fragment>
        )
    }
}

export default Topbar
