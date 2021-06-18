import React from 'react'
import PaymentMethod from './PaymentMethod'
// import { sections } from "./section"
import { Switch, Route } from "react-router-dom";



const Payment = () => {

    // const sectionData = sections.length ? (
    //     section.map
    // ) : (
    //     <div>loading...</div>
    // )

    return (
        <Switch>

        <div className="d-flex justify-content-center align-items-center"  style={{background:"#E5E5E5"}}>
            <div style={{width: "826px"}}>
                <div className='rounded-3 border border-2 p-4 overflow-hidden' style={{background: "#F2F2F2"}}>
                    <PaymentMethod />
                </div>
            </div>
        </div>
        </Switch>
    )
}

export default Payment
