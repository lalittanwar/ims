import React,{useReducer} from 'react'
import {OverlayTrigger,Tooltip} from 'react-bootstrap'
import BrandList from './BrandList'
import './brand.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import BrandModal from '../Brand/BrandModal'


export const BrandContext = React.createContext()

const showInitial = false;
const isUpdateInit = false;
const alertInit = true;

const reducer = (state,action) => {
    switch(action) {
        case 'handleShow':
            return true
        case 'handleHide':
            return false
        default:
            return state
    }
}

const reducerUpdate = (state,action) => {
    switch(action) {
        case 'update':
            return true
        case 'noUpdate':
            return false
        default:
            return false
    }
}

const reducerAlert = (state,action) => {
    switch(action) {
        case 'alert':
            return true
        case 'noAlert':
            return false
        default:
            return false
    }
}


function Brand() {

    const [show,dispatch] = useReducer(reducer,showInitial)
    const [isUpdate,dispatchUpdate] = useReducer(reducerUpdate,isUpdateInit)
    const [alert,dispatchAlert] = useReducer(reducerAlert,alertInit)


    function addItem() {
        dispatchUpdate('noUpdate')
        dispatch('handleShow')
        // console.log('1',isUpdate);
    }

    function addBrandTooltip(props) {
        return (
            <Tooltip id="button-tooltip" {...props}>
                Add brand
            </Tooltip>
        );
    }

    return (
        <React.Fragment>
            <BrandContext.Provider value={{showState: show,showDispatch: dispatch,isUpdate:isUpdate,dispatchUpdate:dispatchUpdate, alert:alert,dispatchAlert:dispatchAlert}}>
                <div className="p-2">
                    <div className="row">
                        <div className="col-12 col-sm-8 mb-2 mb-sm-0" > <h4>Brand</h4> </div>
                        <div className="col-12 col-sm-4 mb-2 mb-sm-0 text-right">
                            <div className="rounded-circle wd-35 ht-35 text-white ml-auto position-relative add-bx cp" onClick={addItem}>
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
                    <BrandList />
                    {/* {isUpdate ? null :<BrandModal />} */}
                </div>
            </BrandContext.Provider>
        </React.Fragment>
    )
}

export default Brand

