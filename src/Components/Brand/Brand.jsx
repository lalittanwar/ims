import React,{useState,useEffect} from 'react'
import {Button,Modal,Form,OverlayTrigger,Tooltip} from 'react-bootstrap'
import BrandService from '../../Services/BrandService';
import BrandList from './BrandList'
import './brand.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import BrandModal from '../Brand/BrandModal'


function Brand() {

    const [show,setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

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
                <div className="col-12 col-sm-8 mb-2 mb-sm-0" > <h4>Brand</h4> </div>    
                <div className="col-12 col-sm-4 mb-2 mb-sm-0 text-right">
                    <div className="rounded-circle wd-35 ht-35 text-white ml-auto position-relative add-bx cp" onClick={handleShow}>
                        <span className="position-absolute add-button">
                            <OverlayTrigger
                                placement="left"
                                delay={{show: 250,hide: 400}}
                                overlay={addBrandTooltip}
                            >
                                <FontAwesomeIcon icon={faPlus} />
                            </OverlayTrigger>
                        </span>
                    </div>
                </div>
            </div>
            <BrandList show={show} setShow={setShow}/>
           
            <BrandModal show={show} setShow={setShow}/>
        </div>
    )
}

export default Brand

