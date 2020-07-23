import React, { useReducer, useState } from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons'
import TextField from '@material-ui/core/TextField'
import { Grid } from '@material-ui/core'
import AttributeModal from './AttributeModal'



function Attribute(){

    const [searchAttribute,setSearchedAttribute] = useState("");
    const [showAttributeModal,setShowAttributeModal] = useState(false);
    const [isUpdateAttribute,setIsUpdateAttribute] = useState(false);


    const onChangeOfSearchAttribute = (event) => {
        setSearchedAttribute(event.target.value)

    } 

    const addAttributeTooltip = (props) => {
        return (
            <Tooltip id="button-tooltip" {...props}>
                Add attribute
            </Tooltip>
        );
    }

    const toggleAddAttributeModal = () => {
        setShowAttributeModal(!showAttributeModal);
    }

    return (
        <React.Fragment>
            <div className="p-2">
                <div className="row align-items-top">
                    <div className="col-12 col-sm-12 col-lg-4 mb-2 mb-sm-0" > <h4>Attributes</h4> </div>
                    <div className="col-6 col-sm-6 col-lg-4 mb-2 mb-sm-0">
                        <div className="w-100 position-relative">
                            <Grid container spacing={1} alignItems="flex-end" className="w-100">
                                <Grid item className="w-10">
                                    <FontAwesomeIcon icon={faSearch} />
                                </Grid>
                                <Grid item  className="w-90">
                                    <TextField id="input-with-icon-grid" label="Search Attribute Ex: Color"  className="w-100"
                                    value={searchAttribute}
                                    onChange={onChangeOfSearchAttribute}/>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6  col-lg-4  mb-2 mb-sm-0 text-right">
                        <div className="rounded-circle wd-35 ht-35 text-white ml-auto position-relative add-bx cp" onClick={toggleAddAttributeModal}>
                            <span className="position-absolute add-button">
                                <OverlayTrigger
                                    placement="left"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={addAttributeTooltip}
                                >
                                    <FontAwesomeIcon icon={faPlus} />
                                </OverlayTrigger>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <AttributeModal 
                showAttributeModal = {showAttributeModal}
                isUpdateAttribute = {isUpdateAttribute}
                toggleAddAttributeModal = {toggleAddAttributeModal}> 
            </AttributeModal>
        </React.Fragment>
    );
}

export default Attribute ;