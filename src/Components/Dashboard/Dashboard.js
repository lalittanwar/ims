import React, { Component } from 'react'

export class Dashboard extends Component {

    constructor(){
        super();
        this.setState({

        });
    }

   componentDidMount(){
       console.log(process.env.REACT_APP_API_BASE_URL);
   }

    render() {
        return (
            <div style={{padding:10}}>
                <h4 >Dashboard</h4>
            </div>
        )
    }
}

export default Dashboard
