import React,{useState} from 'react'
import {Button,Modal,Form} from 'react-bootstrap'

function Product() {
    const [show,setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [product,setProduct] = useState({name:'',status:'active'});
    const handleName = (event) => setProduct({...product,name:event.target.value});
    const handleStatus = (event) => setProduct({...product,status:event.target.value});
    const saveProduct = (event) => {
        event.preventDefault();
        console.log('product',product);
        handleClose();
    }


    return (
        <div style={{padding: 10}}>
            <h4>Product</h4>
            <Button variant="outline-success" onClick={handleShow}> Add product</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={saveProduct}>
                        <Form.Group controlId="formBasicEmail" >
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" value={product.name} onChange={handleName} />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Label>Status</Form.Label>
                            <Form.Control as="select" custom value={product.status} onChange={handleStatus}>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit" onClick={saveProduct}>Save Changes</Button>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Product

