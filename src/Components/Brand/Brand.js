import React,{useState,useEffect} from 'react'
import {Button,Modal,Form} from 'react-bootstrap'
import Axios from 'axios';


function Brand() {
    const [show,setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [product,setProduct] = useState({brand: '',available: true,id: 0});
    const handleName = (event) => setProduct({...product,brand: event.target.value});
    const handleStatus = (event) => setProduct({...product,available: event.target.value});

    const saveProduct = (event) => {
        event.preventDefault();
        setProduct({...product,id: product.id + 1});
        console.log('product',product);
        // const product = product;

        Axios.post('https://ims-db-service.herokuapp.com/db/brand',{product})
        .then(json => console.log(json.data))

        handleClose();
    }

    useEffect(() => {
        Axios.get('https://ims-db-service.herokuapp.com/db/brand')
        .then(json => console.log(json.data))
      });
    


    return (
        <div style={{padding: 10}}>
            <h4>Brand</h4>
            <Button variant="outline-success" onClick={handleShow}> Add Brand</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Brand</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={saveProduct}>
                        <Form.Group controlId="formBasicEmail" >
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="text" placeholder="brand" value={product.brand} onChange={handleName} />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Label>Status</Form.Label>
                            <Form.Control as="select" custom value={product.available} onChange={handleStatus}>
                                <option value="true">Active</option>
                                <option value="false">Inactive</option>
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

export default Brand

