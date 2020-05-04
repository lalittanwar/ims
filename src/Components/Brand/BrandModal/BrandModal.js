import React,{useState,useEffect} from 'react'
import {Button,Modal,Form} from 'react-bootstrap'
import BrandService from '../../../Services/BrandService'

function BrandModal() {

    const brandService = new BrandService();

    const [product,setProduct] = useState({id: 0,brand: '',available: true});
    const handleName = (event) => setProduct({...product,brand: event.target.value});
    const handleStatus = (event) => setProduct({...product,available: event.target.value});


    const saveProduct = (event) => {
        event.preventDefault();
        setProduct({...product,id: product.id + 1});
        brandService.saveBrand(product);
        // handleClose();
    }

    return (
        <div>
            <Modal>
                <Modal.Header closeButton>
                    <Modal.Title>Add Brand</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={saveProduct}>
                        <Form.Group controlId="formBasicEmail" >
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="text" placeholder="Add new brand.ex: Addidas" value={product.brand} onChange={handleName} />
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
                    <Button variant="secondary" >Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default BrandModal
