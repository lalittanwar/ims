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
            {/* <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
            /> */}
            <TextField id="standard-basic" label="Search Brand" type="text"
                value={searchTerm}
                onChange={handleChange} />
            <div className="row mt-2">
                {!brandFetched ?
                    <div className="col-12 text-center pt-5"><Loader type="TailSpin" color="#0056b3" height={80} width={80} /></div>
                    : results.map((brand) =>
                        <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-2" key={brand.id}>
                <div className="card brand-card">
                    <img className="card-img-top w-100" src="https://www.speedsecuregcc.com/uploads/products/default.jpg" alt="Brand image" />
                    <div className="card-body">
                        <p className="card-text mb-1">Brand :
                                    <span className="text-primary text-bold text-uppercase font-weight-bold"> {brand.brand} </span>
                        </p>
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
                    </div>
                </div>
            </div>
                    )}
            </div>
        <BrandModal updatedBrand={updatedBrand} />
        </React.Fragment >
    )
}

export default BrandList;