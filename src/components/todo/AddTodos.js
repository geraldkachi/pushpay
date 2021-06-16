import React from "react";

const AddTodos = ({ addTodo }) => {
  const [content, setContent] = React.useState({
    text: '',
  });

  const { text } = content

  const handleChange = (e) => {
      const {name,value} = e.target
    setContent({ ...content, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContent({
      text:''
    })
    addTodo(content)
    // console.log(content);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="mt-3">
        <label className="block">Add new todos: </label>{' '}
        <input type="text" name="text" value={text} onChange={handleChange} required />
      </form>
    </div>
  )
  
}


export default AddTodos;
