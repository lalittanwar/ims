import RequestService from './RequestService';
import React from 'react'

class BrandService extends React.Component {

    constructor() {
        super();
        this.requestService = new RequestService();
    }

    findBrandById = function (ids) {
        const url = process.env.REACT_APP_API_PRODUCT_SERVICE + "brand/?brandIds=" + ids;
        this.requestService.getRequest(url)
            .then(response => {return Promise.resolve(response);})
            .catch(error => {return Promise.reject(error);});
    }

    findAllBrand = function () {
        const url = process.env.REACT_APP_API_PRODUCT_SERVICE + "brand/";
        return this.requestService.getRequest(url)
            .then(response => {return Promise.resolve(response);})
            .catch(error => {return Promise.reject(error);});
    }

    saveBrand = function (object) {
        const url = process.env.REACT_APP_API_PRODUCT_SERVICE + "brand/";
        this.requestService.postRequest(url,object)
            .then(response => {return Promise.resolve(response);})
            .catch(error => {return Promise.reject(error);});
    }
}

export default BrandService;