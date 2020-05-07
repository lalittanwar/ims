import React,{useState,useEffect,useContext} from 'react'
import BrandService from '../../Services/BrandService';
import './brandlist.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash,faEdit} from '@fortawesome/free-solid-svg-icons';
import {Tooltip,OverlayTrigger} from 'react-bootstrap';
import BrandModal from '../Brand/BrandModal'
import Loader from 'react-loader-spinner';
import {BrandContext} from '../Brand/Brand'
import TextField from '@material-ui/core/TextField'

function BrandList() {

    const brandContext = useContext(BrandContext)

    const brandService = new BrandService();
    const [brand,setBrand] = useState([]);
    const [brandFetched,isBrandFetched] = useState(false);
    const [userHasWritePermission,setUserPermission] = useState(true);
    const [updatedBrand,setUpdatedBrand] = useState([]);
    const [searchTerm,setSearchTerm] = useState("");

    const alert = () => brandContext.dispatchAlert('alert')

    function findBrand() {
        return brandService.findAllBrand()
            .then(res => {
                setBrand(res);
                setTimeout(() => isBrandFetched(true),1000);
            })
    }

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    const results = brand.filter(brands => {
        return brands.brand.toLowerCase().includes(searchTerm.toLowerCase())
    })

    useEffect(() => {
        findBrand()
        setTimeout(() => brandContext.dispatchAlert('alert'),3000)
    },[brandContext.showState]);
    /* isBrandFetched(false);
    useEffect(() => {
        userService.userHasWritePermission()
            .then(res => setUserPermission(res))
    }, []); */

    function deleteBrandToolTip(props) {
        return (
            <Tooltip id="button-tooltip" {...props}>
                Delete brand
            </Tooltip>
        );
    }

    function updateBrandToolTip(props) {
        return (
            <Tooltip id="button-tooltip" {...props}>
                Update brand
            </Tooltip>
        );
    }

    function deleteBrand(brand) {
        brandService.deleteBrand(brand)
        findBrand()
    }

    function updateBrand(brand) {
        setUpdatedBrand(brand);
        brandContext.dispatchUpdate('update')
        brandContext.showDispatch('handleShow')
    }

    return (
        <React.Fragment>
            <br />
            {!brandContext.alert ? 
            (brandContext.isUpdate ? 
            (<div className="alert alert-primary alert-dismissible fade show">
                Successfully Updated.
                <button type="button" className="close" data-dismiss="alert">&times;</button>
            </div>) :
            (<div className="alert alert-success alert-dismissible fade show">
                Successfully Saved.
                <button type="button" className="close" data-dismiss="alert">&times;</button>
            </div>)) : null}
            <TextField id="standard-basic" label="Search Brand" type="text"
                value={searchTerm}
                onChange={handleChange} />
            <br /><br />
            <div className="row mt-2">
                {!brandFetched ?
                    <div className="col-12 text-center pt-5"><Loader type="TailSpin" color="#0056b3" height={80} width={80} /></div>
                    :
                    <div className="col-10 col-md-10 col-lg-10 col-xl-10 mb-2" key={brand.id}>
                        <table className="table ">
                            <thead>
                                <tr>
                                    <th scope="col">Brand</th>
                                    <th scope="col">Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            {results.map((brand) =>
                                <tbody>
                                    <tr>
                                        <td>{brand.brand}</td>
                                        <td>{brand.available ? (<span className="badge badge-success">Active</span>) : <span className="badge badge-danger">Inactive</span>}</td>
                                        <div className="position-relative">
                                            <div className="position-absolute delete-button d-inline-block cp delete-btn-position rounded-circle" onClick={() => deleteBrand(brand)}>
                                                <OverlayTrigger
                                                    placement="left"
                                                    delay={{show: 10,hide: 10}}
                                                    overlay={deleteBrandToolTip}
                                                >
                                                    <div className="icon-center">  <FontAwesomeIcon icon={faTrash} size="xs" /> </div>
                                                </OverlayTrigger>
                                            </div>
                                            <div className="position-absolute update-button d-inline-block cp update-btn-position rounded-circle" onClick={() => updateBrand(brand)}>
                                                <OverlayTrigger
                                                    placement="left"
                                                    delay={{show: 10,hide: 10}}
                                                    overlay={updateBrandToolTip}
                                                >
                                                    <div className="icon-center">  <FontAwesomeIcon icon={faEdit} size="xs" /> </div>
                                                </OverlayTrigger>
                                            </div>
                                        </div>
                                    </tr>
                                </tbody>)}
                        </table>
                    </div>
                }
            </div>
            <BrandModal updatedBrand={updatedBrand} />
        </React.Fragment >
    )
}

export default BrandList;