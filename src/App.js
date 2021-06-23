// app.js is where we start because it is the root of our application
import React, { useState } from 'react'
import TodoList from './TodoList';

function App() {
  // setting useState to an empty array because we are starting with no todos. the first variable represents all the todos inside of our todostate and the 2nd is the function we call to update those todos.
  
  const [todos, setTodos] = useState([])

  function handleAddTodo(e) {
    
  }
  return (
    // the JSX allows us to embed components inside other components
    <div>
      {/* passing the prop todos from TodoList and we want to pass the todos variable to that prop (todos) */}
    <TodoList todos={todos}/>
    {/* input for user to add new todos */}
    <input type="text" />
    {/* set up an onclick listener for adding todos and we set it equal to a function (handleAddTodo) */}
    <button onClick={handleAddTodo}>Add Todo</button>
    <button>Clear Completed</button>
    <div>0 left to do</div>
    </div>
  )
}
export default App;
