import React,{useState,useEffect} from 'react'
import './App.css'
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
    //States
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all');
    const [filterdTodos, setFilterdTodos] = useState([])
   //useEffect
    useEffect(() => {
        getLocalTodos()
      
    }, [])
    useEffect(() => {
        saveLocalTodos();
            switch (status) {
                case 'completed':
                    setFilterdTodos(todos.filter((todo) => todo.completed === true))
                    break;
                    case 'uncompleted':
                     setFilterdTodos(todos.filter((todo) => todo.completed === false))
                    break;
                default:
                    setFilterdTodos(todos);
                    break;
            }
      
    }, [todos, status])

     //Save to local 
    function saveLocalTodos() {
   localStorage.setItem('todos', JSON.stringify(todos))
     
    }
    function getLocalTodos() {
        if (localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([]))
        } else {
            let todoLocal = JSON.parse(localStorage.getItem('todos'))
            setTodos(todoLocal)
        }
    }
   //JSX
    return (
        <div className="App">
           <header>
         <h1>Hicm Todo List</h1>
            </header>
            <Form
                inputText={inputText}
                todos={todos}
                setTodos={setTodos}
                setInputText={setInputText}
                setStatus={setStatus}/>
            <TodoList
                setTodos={setTodos}
                todos={todos}
                filterdTodos={filterdTodos}/>
        </div>
    )
}

export default App