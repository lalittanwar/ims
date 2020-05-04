import React, { useState, useEffect } from 'react'
import { Button, Modal, Form, OverlayTrigger, Tooltip } from 'react-bootstrap'
import BrandService from '../../Services/BrandService';
import BrandList from './BrandList'
import './brand.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


function Brand() {

    const brandService = new BrandService();


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [product, setProduct] = useState({ id: 0, brand: '', available: true });
    const handleName = (event) => setProduct({ ...product, brand: event.target.value });
    const handleStatus = (event) => setProduct({ ...product, available: event.target.value });

    const [brand, setBrand] = useState([]);

    const saveProduct = (event) => {
        event.preventDefault();
        setProduct({ ...product, id: product.id + 1 });
        brandService.saveBrand(product);
        handleClose();
    }

    useEffect(() => {
        brandService.findAllBrand()
            .then(res => {
                setBrand(res)
                console.log(brand, 'brand')
            })
    }, []);

    function addBrandTooltip(props) {
        return (
          <Tooltip id="button-tooltip" {...props}>
            Add brand
          </Tooltip>
        );
      }

    return (
        <div className="p-2">
            <div className="row">
                <div className="col-12 col-sm-8 mb-2 mb-sm-0"> <h4>Brand</h4> </div>
                <div className="col-12 col-sm-4 mb-2 mb-sm-0 text-right">
                    <div className="rounded-circle wd-35 ht-35 text-white ml-auto position-relative add-bx cp" onClick={handleShow}>
                        <span className="position-absolute add-button">
                            <OverlayTrigger
                                placement="left"
                                delay={{ show: 250, hide: 400 }}
                                overlay={addBrandTooltip}
                            >
                                <FontAwesomeIcon icon={faPlus} />
                            </OverlayTrigger>
                        </span>
                    </div>
                </div>
            </div>
            <BrandList />
            {/* TODO => Make seprate component for this */}
            <Modal show={show} onHide={handleClose}>
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
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default Brand

