import React from 'react'
import Spinner from ".//Spinner"
import { withRouter } from 'react-router-dom'

const NotFound = ({ history }) => {
    return (
        <div className="text-center">
            Page not found...
            <div className=" vh-100">
                <Spinner />
                <button onClick={() => history.push('/')} className="btn btn-primary rounded-3">Press Me!</button>
            </div>
        </div>
    )
}

export default withRouter(NotFound)
