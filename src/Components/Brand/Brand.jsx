import React, { useReducer, useState } from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import BrandList from './BrandList'
import './brand.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons'
import BrandModal from '../Brand/BrandModal'
import TextField from '@material-ui/core/TextField'
import { Grid } from '@material-ui/core'

export const BrandContext = React.createContext()

const showInitial = false;
const isUpdateInit = false;
const alertInit = true;

const reducer = (state, action) => {
    switch (action) {
        case 'handleShow':
            return true
        case 'handleHide':
            return false
        default:
            return state
    }
}

const reducerUpdate = (state, action) => {
    switch (action) {
        case 'update':
            return true
        case 'noUpdate':
            return false
        default:
            return false
    }
}

const reducerAlert = (state, action) => {
    switch (action) {
        case 'alert':
            return true
        case 'noAlert':
            return false
        default:
            return false
    }
}


function Brand() {

    const [show, dispatch] = useReducer(reducer, showInitial);
    const [isUpdate, dispatchUpdate] = useReducer(reducerUpdate, isUpdateInit);
    const [alert, dispatchAlert] = useReducer(reducerAlert, alertInit);
    const [searchBrand, setSearchedBrand] = useState("");


    function addItem() {
        dispatchUpdate('noUpdate')
        dispatch('handleShow')
        console.log('1', isUpdate);
    }

    const onChangeOfSearchBranch = (event) => {
        setSearchedBrand(event.target.value)
    }

    function addBrandTooltip(props) {
        return (
            <Tooltip id="button-tooltip" {...props}>
                Add brand
            </Tooltip>
        );
    }

    return (<>
        <BrandContext.Provider value={{ showState: show, showDispatch: dispatch, isUpdate: isUpdate, dispatchUpdate: dispatchUpdate, alert: alert, dispatchAlert: dispatchAlert }}>
            <div className="p-2">
                <div className="row align-items-top">
                    <div className="col-12 col-sm-12 col-lg-4 mb-2 mb-sm-0" > <h4>Brand</h4> </div>
                    <div className="col-6 col-sm-6  col-lg-4  mb-2 mb-sm-0">
                        <div className="w-100 position-relative">
                            <Grid container spacing={1} alignItems="flex-end" className="w-100">
                                <Grid item className="w-10">
                                    <FontAwesomeIcon icon={faSearch} />
                                </Grid>
                                <Grid item  className="w-90">
                                    <TextField id="input-with-icon-grid" label="Search Brand Ex: Adidas"  className="w-100"
                                    value={searchBrand}
                                    onChange={onChangeOfSearchBranch}/>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6  col-lg-4  mb-2 mb-sm-0 text-right">
                        <div className="rounded-circle wd-35 ht-35 text-white ml-auto position-relative add-bx cp" onClick={addItem}>
                            <span className="position-absolute add-button">
                                <OverlayTrigger
                                    placement="left"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={addBrandTooltip}
                                >
                                    <FontAwesomeIcon icon={faPlus} />
                                </OverlayTrigger>
                            </span>
                        </div>
                    </div>
                </div>
                <BrandList searchBrand={searchBrand}/>
                {isUpdate ? null : <BrandModal />}
            </div>
        </BrandContext.Provider>
    </>
    )
}

export default Brand

