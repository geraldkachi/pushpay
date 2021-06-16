import React from 'react'
import { withRouter } from 'react-router-dom'
import Stech from './Stech'



const Pushpay = ({match, history, location}) => {
    return (
        <div>
            <Stech />
        </div>
    )
}

export default withRouter(Pushpay)
