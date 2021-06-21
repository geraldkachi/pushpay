import React from 'react'
import PaymentMethod from './PaymentMethod'
// import { sections } from "./section"
import "./payment.css"

import { ListSTyle, BackRad } from "./styled"



const Payment = () => {

    // const sectionData = sections.length ? (
    //     section.map
    // ) : (
    //     <div>loading...</div>
    // )

    return (
        <>
            <div className="d-flex justify-content-center align-items-center vh-100 backpay">
                <div style={{width: "616px"}}>
                    <BackRad className='p-4 overflow-hidden'>
                        <PaymentMethod />
                    </BackRad>
                </div>
            </div>
        </>
    )
}

export default Payment