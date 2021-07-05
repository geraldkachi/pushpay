import React from 'react'
import { PushContext } from '../ContextProvider';

const ProcessingFeSideBar = () => {

    const [ PaymentContext ] = React.useContext(PushContext); 


    return (
        <div>
            <p style={{fontSize: ".9rem"}} className="fs-1">NGN {(paymentFormular(PaymentContext?.amount, PaymentContext?.channel)?.totalCharges) - parseInt(PaymentContext?.amount.toLocaleString())}</p>
        </div>
    )
}

export default ProcessingFeSideBar
