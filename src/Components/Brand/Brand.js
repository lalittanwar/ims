import React,{useState,useEffect} from 'react'
import {Button,Modal,Form} from 'react-bootstrap'
import BrandService from '../../Services/BrandService'
import {Link} from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BrandModal from '../Brand/BrandModal/BrandModal'


function Brand() {

    const brandService = new BrandService();

    const [show,setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [brand,setBrand] = useState([]);

    useEffect(() => {
        brandService.findAllBrand()
            .then(res => {
                setBrand(res)
                console.log(brand,'brand')
            })
    },[]);

    return (
        <Router>
            <Switch>
              <Route path="/brandModal" exact component={BrandModal} />
            </Switch>
      
        <div className="p-2">

            <div className="row">
                <div className="col-12 col-sm-8 mb-2 mb-sm-0"> <h4>Brand</h4> </div>
                <div className="col-12 col-sm-4 mb-2 mb-sm-0 text-right">
                    <Link to="/brandModal">
                        <Button variant="outline-success" onClick={handleShow}> Add Brand</Button>
                    </Link>
                </div>
            </div>

            <ul>{brand.map((brand) =>
                <li key={brand.id}>{brand.brand}</li>
            )} </ul>
        </div>
        </Router>
    )
}

export default Brand

