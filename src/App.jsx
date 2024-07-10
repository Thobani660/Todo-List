import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()!== '') { 
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  const addTodo = (todo) => {
    setTodos([...todos, { text: todo, completed: false }]);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((todo, i) => i!== index));
  };

  const toggleCompleted = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index? {...todo, completed:!todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <br /> 
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter new todo item"
        />
        <button 
          className='but' 
          type="submit">Add Todo
        </button>
      </form>
      {todos.length === 0? (
        <p>No list</p>
      ) : (
        <ul>
          {todos.map((todo, index) => (
            <li key={index} style={{alignItems:"center", justifyContent:"center"}}>
               <input 
               style={{marginTop:"20px",borderRadius:"10px"}}
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleCompleted(index)}
              />
              <span
                style={{
                  textDecoration: todo.completed? 'line-through' : 'none',
                }}
                >
                {todo.text}
              </span>
              <button
                 className='delete' 
                 onClick={() => deleteTodo(index)}>Delete 
                 <span className="material-symbols-light--delete-outline"></span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
