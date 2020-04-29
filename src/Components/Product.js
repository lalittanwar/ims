import React,{Component} from 'react'
import {Button} from 'react-bootstrap'

export class Product extends Component {
    render() {
        return (
            <div style={{padding: 10}}>
                <h4>Product</h4>
                <Button variant="outline-success">Add product</Button>
            </div>
        )
    }
}

export default Product
