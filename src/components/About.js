import React from 'react'
import TodoApp from './todo/TodoApp'
import Rainbow from "../hoc/Rainbow"


const About = () => {
    return (
        <div className="container mt-5">
            <h4 className="text-center">About</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit alias illo pariatur deserunt mollitia, cumque fugiat provident quae reiciendis quaerat.</p>

            <div className="d-flex justify-content-center">
                <TodoApp />
            </div>
        </div>
    )
}

export default Rainbow(About)
