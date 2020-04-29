import React,{useState} from 'react'
import {Button,Modal} from 'react-bootstrap'

function Product() {
    const [show,setShow] = useState(false);
                const handleClose = () => setShow(false);
                const handleShow = () => setShow(true);
    return (
        <div style={{padding: 10}}>
        <h4>Product</h4>
        <Button variant="outline-success" onClick={handleShow}> Add product</Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}> Close  </Button>
                <Button variant="primary" onClick={handleClose}>Save Changes</Button>
            </Modal.Footer>
        </Modal>
    </div>
    )
}

export default Product

