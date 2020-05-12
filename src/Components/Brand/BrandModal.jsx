import React,{useState,useEffect,useContext} from 'react'
import {Button,Modal,Form} from 'react-bootstrap'
import BrandService from '../../Services/BrandService'
import {BrandContext} from '../Brand/Brand'

function BrandModal({updatedBrand,HideAddModal,addModal}) {

    const brandService = new BrandService();
    const brandContext = useContext(BrandContext)

    const [product,setProduct] = useState({id: 0,brand: '',available: true});

    const [error, setError] = useState(null);

    const handleName = (event) => {
        if(event.target.value == ''){
            setError('brand cannot be empty')
        }
        setProduct({...product,brand: event.target.value});
    }
    
    const handleStatus = (event) => setProduct({...product,available: event.target.value});

    const handleHide = () => brandContext.showDispatch('handleHide')
    const noAlert = () => brandContext.dispatchAlert('noAlert')
    const alert = () => brandContext.dispatchAlert('alert')

    const HideAddModal1 = () => HideAddModal

    useEffect(() => {
        setError('')
        if(brandContext.isUpdate) {
            setProduct(updatedBrand);
        } else {
            setProduct({id: 0,brand: '',available: true});
        }
    },[brandContext.showState])

    const saveProduct = (event) => {
        event.preventDefault();
        setProduct({...product,id: product.id + 1})
        brandService.saveBrand(product)
        .then(res => {
            setProduct({id: 0,brand: '',available: true})
            noAlert()
            setTimeout(() => handleHide(),0)
            HideAddModal1()
        })
        .catch(error => {
            if(error.response.status == 400){
                setError('Brand already exist')
            } else {
                setError('Something went wrong. Please try again')
            }
        })
      
    }

    const updateProduct = (event) => {
        event.preventDefault();
        brandService.updateBrand(product);
        // alert()
        setTimeout(() => handleHide(),0)
        noAlert()
    }


    return (
        <div className="p-2">
            <Modal show={brandContext.showState}>
                <Modal.Header closeButton onClick={handleHide}>
                    <Modal.Title>{updatedBrand ? 'Update Brand' : 'Add Brand'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={saveProduct}>
                        <Form.Group controlId="formBasicEmail" >
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="text" placeholder="Add new brand.ex: Addidas" required value={product.brand} onChange={handleName} />
                        </Form.Group>
                        <p style={{fontSize:'12px'}} className="text-danger">{error}</p> 
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
                    {updatedBrand ? <Button variant="success" type="submit" onClick={updateProduct}>Update</Button> :
                        <Button variant="primary" type="submit" onClick={saveProduct}>Save Changes</Button>}
                    <Button variant="secondary" onClick={handleHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default BrandModal
