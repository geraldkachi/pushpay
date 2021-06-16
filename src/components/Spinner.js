import React from 'react'
import spin from "../components/images/spinner.gif"

const Spinner = () => {
    return (
        <div className="text-center justify-content-center align-items-center">
           <img src={spin} alt=""/> 
        </div>
    )
}

export default Spinner
