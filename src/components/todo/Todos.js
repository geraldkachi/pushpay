import React from 'react'
import PropTypes from 'prop-types';

const Todos = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo => (
                <div key={todo.id} className="list-group">
                    <div onClick={()=> deleteTodo(todo.id)} className="list-group-item">
                        {todo.content}
                    </div>
                </div>
            )
        )
    ) : (
        <div>loading todos here...</div>
    )

    return (
        <>
          {todoList}  
        </>
    )
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    deleteTodo: PropTypes.func.isRequired,
}

export default Todos

// PropTypes for class based component this is how it should be written 

// static propTypes = {
//     todos: PropTypes.array.isRequired,
//     deleteTodo: PropTypes.func.isRequired,
// }