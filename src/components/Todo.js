import React from 'react'

export default function Todo(props) {
    const { text,todo, todos, setTodos } = props;
    //events
    function deleteHandler() {
        setTodos(todos.filter((el) => el.id !== todo.id))
    };
    function completeHandler() {
        setTodos(todos.map((item) => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
                
            }
            return item;
        }))
    }
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
         <button onClick={completeHandler} className="complete-btn" ><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} className="trash-btn" ><i className="fas fa-trash"></i></button>
        </div>
    )
}
