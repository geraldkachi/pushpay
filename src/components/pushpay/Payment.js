import React from 'react'
import PaymentMethod from './PaymentMethod'
// import { sections } from "./section"
import "./payment.css"

import { ListSTyle, BackRad, PaymentLay } from "./styled"



const Payment = () => {

    // const sectionData = sections.length ? (
    //     section.map
    // ) : (
    //     <div>loading...</div>
    // ) d-flex justify-content-center align-items-center 

    return (
        <>
            <PaymentLay className="vh-100 backpay">
                <div style={{width: "616px"}}>
                    <BackRad className='p-4 overflow-hidden'>
                        <PaymentMethod />
                    </BackRad>
                </div>
            </PaymentLay>
        </>
    )
}

export default Payment