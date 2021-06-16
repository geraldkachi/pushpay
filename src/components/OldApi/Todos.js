import React from 'react'

const Todos = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
      todos.map(todo => {
        return(
          <div key={todo.id}>
              <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
          </div>
      )
        })  
    ) : (
        <p className="text-center">AH! you have no todos </p>
    );
    return (
        <div>
            <h1>todos</h1>
            {todoList}
        </div>
    )
}

export default Todos





// //////////////////////////////////////////// app.js

// import React from "react";
// import Todos from "./components/Todos";
// import "./App.css";

// const App = () => {
//   const [todos, setTodos] = React.useState([
//     { id: "1", content: "buy some milk " },
//     { id: "2", content: "buy Gaming systems " },
//   ]);

//   const deleteTodo = (id) =>{
//     const todoss = todos.filter(todo => {
//      return todo.id !== id
//     })
//     setTodos(todoss)
//   }

//   return (
//     <div className="text-center mt-5">
//       <h1>hiii kachi</h1>
//       <Todos todos={todos} deleteTodo={deleteTodo} />
//     </div>
//   );
// };

// export default App;

// <Navbar />
// <Switch>
//  <Route exact path="/" component={Home} />
//  <Route exact path="/about" component={About} />
// <Route exact path="/shop" component={Shop} />
// <Route path="/shop/:id" component={ItemDetail} />
// <Redirect to="/404" component={NotFound} />
// </Switch>
