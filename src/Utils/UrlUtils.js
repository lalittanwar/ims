
import React from 'react';

class UrlUtils extends React.Component {

    constructor() {
        super();
    }

    getQueryParamValue = (queryParam) => {
        let queryReturn = '';
        if (queryParam) {
            let url = window.location.href;
            let queryString = url.split("?")[1];
            if (queryString) {
                let queryStringList = queryString.split("&");
                queryStringList.forEach(query => {
                    let queryKey = query.split("=")[0]
                    if (queryParam == queryKey) {
                        queryReturn = query.split("=")[1];
                    }

                })
            }
        }
        return queryReturn;
    }


}

export default UrlUtils;