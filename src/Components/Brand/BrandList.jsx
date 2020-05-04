import React, { useState, useEffect } from 'react'
import BrandService from '../../Services/BrandService';
import './brandlist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import UserService from '../../Services/UserService';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';



function BrandList() {
    const brandService = new BrandService();
    const userService = new UserService();
    const [brand, setBrand] = useState([]);
    const [userHasWritePermission, setUserPermission] = useState(true);
    useEffect(() => {
        brandService.findAllBrand()
            .then(res => setBrand(res))
    }, []);
    // useEffect(() => {
    //     userService.userHasWritePermission()
    //         .then(res => setUserPermission(res))
    // }, []);

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

    return (
        <React.Fragment>
            <div className="row mt-2">
                {brand.map((brand) =>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-2" key={brand.id}>
                        <div className="card brand-card">
                            <img className="card-img-top w-100" src="https://www.speedsecuregcc.com/uploads/products/default.jpg" alt="Brand image" />
                            <div className="card-body">
                                <p className="card-text mb-1">Brand :
                                    <span className="text-primary text-bold text-uppercase font-weight-bold"> {brand.brand} </span>
                                </p>
                                <div className="position-relative">
                                    <div className="position-absolute delete-button d-inline-block cp delete-btn-position rounded-circle">
                                        <OverlayTrigger
                                            placement="left"
                                            delay={{ show: 10, hide: 10 }}
                                            overlay={deleteBrandToolTip}
                                        >
                                          <div className="icon-center">  <FontAwesomeIcon icon={faTrash}  size="xs"/> </div>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="position-absolute update-button d-inline-block cp update-btn-position rounded-circle">
                                        <OverlayTrigger
                                            placement="left"
                                            delay={{ show: 10, hide: 10 }}
                                            overlay={updateBrandToolTip}
                                        >
                                            <div className="icon-center">  <FontAwesomeIcon icon={faEdit}  size="xs"/> </div>
                                        </OverlayTrigger>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>


        </React.Fragment>
    )
}

export default BrandList;