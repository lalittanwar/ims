import React, { useReducer, useState } from 'react'
import {Button,Modal,Form} from 'react-bootstrap'
import AttributeService from '../../Services/AttributeService'
import { useEffect } from 'react'

function AttributeModal(props){

    const [attributeName,setAttributeName] = useState("");
    const [attributeActive,setAttributeActive] = useState(false);

    useEffect(() => {

    },[props.isUpdateAttribute]);


    const saveAttribute = () => {
        alert(attributeName)
        alert(attributeActive)
    }

    const updateAttribute = () => {
        
    }

    const validateAttribute = () => {

    }


    return (
        <div className="p-2">
            <Modal show={props.showAttributeModal}>
                <Modal.Header closeButton onClick = {props.toggleAddAttributeModal}>
                    <Modal.Title>Add Attribute</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail" >
                            <Form.Label>Attribute Name</Form.Label>
                            {props.isUpdateAttribute ?  <Form.Control type="text" placeholder="Add attribute ex: Color" onChange={(event) => setAttributeName(event.target.value)} /> : 
                            <Form.Control type="text" placeholder="Add new attribute.ex: Color" onChange={(event) => setAttributeName(event.target.value)}  />}
                        </Form.Group>
                        <p style={{fontSize: '12px'}} className="text-danger"></p>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Label>Status</Form.Label>
                            <Form.Control as="select" custom value={attributeActive} onChange={(event) => setAttributeActive(event.target.value)}>
                                <option value="true">Active</option>
                                <option value="false">Inactive</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    {props.isUpdateAttribute ? <Button variant="success" type="submit" onClick = {updateAttribute}>Update</Button> :
                        <Button variant="primary" type="submit" onClick = {saveAttribute}>Save Changes</Button>}
                    <Button variant="secondary" onClick = {props.toggleAddAttributeModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )

} 

export default AttributeModal;

