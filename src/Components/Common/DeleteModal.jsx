import React,{useEffect,useContext} from 'react'
import {Button,Modal} from 'react-bootstrap'
import BrandService from '../../Services/BrandService'
import {BrandContext} from '../Brand/Brand'

export default function DeleteModal({deletedBrand,HideDeleteModal,deleteModal,showDeleteAlert,deleteAlert}) {

    const brandService = new BrandService()
    const brandContext = useContext(BrandContext)

    const noAlert = () => brandContext.dispatchAlert('noAlert')

    useEffect(() => {
        // console.log('deleteBrand',deletedBrand);
    },[brandContext.showState])

    function deleteBrand() {
    brandService.deleteBrand(deletedBrand)
    noAlert()
    showDeleteAlert()
    setTimeout(() => HideDeleteModal(),0)

    }

    return (
        <div>
            <Modal show={deleteModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Do you want to delete Brand</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="danger" onClick={deleteBrand}>Delete</Button>
                    <Button variant="secondary" onClick={HideDeleteModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
