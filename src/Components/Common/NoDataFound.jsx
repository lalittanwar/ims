import React from 'react'
import noData from '../../noData.png'

export default function NoDataFound() {
    const style = {
        margin:'5% 40%'
    }
    return (
        <div style={style}>
            <img src={noData}/>
        </div>
    )
}
