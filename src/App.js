import React, {useState, useEffect} from 'react'
import './App.css';
import {Form} from './components/Form'
import {TodoList} from './components/TodoList'


function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    todoFilter()
  }, [todos, status])

const todoFilter = () => {
  switch (status) {
    case 'completed':
      setFilteredTodos(todos.filter(todo => todo.completed === true))
      break;
    case 'uncompleted': 
      setFilteredTodos(todos.filter(todo => todo.completed))
    break;
    default:
      setFilteredTodos(todos);
  }
} 


  return (
    <div className='App' >
      <header>
        <h1>Will's todo list</h1>
      </header>
      <div>
        <Form inputText={inputText} 
          setTodos={setTodos} 
          setInputText={setInputText} 
          todos={todos} 
          setStatus={setStatus}
          
          />
        
        <TodoList todos={todos} setTodos={setTodos} setFilteredTodos={setFilteredTodos} filteredTodos={filteredTodos}/>
      </div>
      
    </div>
  );
}

export default App;
