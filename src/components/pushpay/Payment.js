import React from 'react'
import PaymentMethod from './PaymentMethod'
// import { sections } from "./section"


const Payment = () => {

    // const sectionData = sections.length ? (
    //     section.map
    // ) : (
    //     <div>loading...</div>
    // )

    return (
        <div className="min-vh-100 d-flex justify-content-center align-items-center"  style={{background:"#E5E5E5"}}>  

           
            <div>
                <div className='rounded-3 border border-2 p-4' style={{background: "#F2F2F2"}}>
                    <div className="row">
                        <div className="col-md-auto">
                        {/* {map.sections((item, index) => (
                            <PaymentMethod key={item.id}  />
                        ))} */}
                        <PaymentMethod />
                        </div>
                        <div className="col-8">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
