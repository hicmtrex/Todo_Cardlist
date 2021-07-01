import React from 'react'

export default function Form(props) {
  const { todos,inputText, setTodos, setInputText,setStatus } = props;
   function inputTextHandler(e) {
     setInputText(e.target.value)
  };
  function submitTodoHandler(e) {
    e.preventDefault();
    setTodos([...todos,{text: inputText, completed:false, id: Math.floor(Math.random() * 100)}])
    setInputText('')
  }
  function statusHandler(e) {
    setStatus(e.target.value);
  }
    return (
        <form onSubmit={submitTodoHandler}>
            <input onChange={inputTextHandler}
          value={inputText}  type="text" className="todo-input" />
        <button className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    )
}
