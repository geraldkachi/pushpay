import React from "react";
import Todos from "./Todos";
import AddTodos from "./AddTodos";

const TodoApp = () => {

  const [todos, setTodo] = React.useState([
    { id: 1, content: "buy some milk" },
    { id: 2, content: "play kachi songs" },
    { id: 3, content: "ikoojo play with kachi" },
  ]);

  const deleteTodo = (id) => {
    // console.log(id);
    const todolist = todos.filter(todo => {
        return todo.id !== id
    })
    setTodo(todolist)  
  };

  const addTodo = (todo, index) => {
    // this brings a new set of todos but the problem is how to update it when its a const 
    const todosAdd = [...todos, todo]
    todo.id = Math.random()
    // todo.id = !todo.id
    setTodo(todosAdd)
    console.log(todosAdd)
    // setTodo({
    //   todosAd
    // })
  }

  return (
    <div className="w-100 text-center mt-4">
      <h1>Todos List</h1>
      <div className="align-items-stretch">
      <Todos todos={todos} deleteTodo={deleteTodo} />
      <AddTodos addTodo={addTodo} />
      </div>
    </div>
  );
};

export default TodoApp;
