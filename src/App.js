// app.js is where we start because it is the root of our application
// useref hook allows us to reference elements inside html, and this case its the input from the user
import React, { useState, useRef } from 'react'
import TodoList from './TodoList';

function App() {
  // setting useState to an empty array because we are starting with no todos. the first variable represents all the todos inside of our todostate and the 2nd is the function we call to update those todos.
  
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  // e is the event property
  function handleAddTodo(e) {
    // accessing whatever element we are currently referencing, in this case the input
    const name = todoNameRef.current.value
    if(name === '')
    
  }
  return (
    // the JSX allows us to embed components inside other components
    <div>
      {/* passing the prop todos from TodoList and we want to pass the todos variable to that prop (todos) */}
    <TodoList todos={todos}/>
    {/* input for user to add new todos. ref is creating a variable todoNameRef */}
    <input ref={todoNameRef} type="text" />
    {/* set up an onclick listener for adding todos and we set it equal to a function (handleAddTodo) */}
    <button onClick={handleAddTodo}>Add Todo</button>
    <button>Clear Completed</button>
    <div>0 left to do</div>
    </div>
  )
}
export default App;
