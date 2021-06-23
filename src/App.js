// app.js is where we start because it is the root of our application
// useref hook allows us to reference elements inside html, and this case its the input from the user
import React, { useState, useRef, useEffect } from 'react'
import TodoList from './TodoList';

// setting a key for local storage.setItem()
const LOCAL_STORAGE_KEY = 'todosApp.todos'


function App() {
  // setting useState to an empty array because we are starting with no todos. the first variable represents all the todos inside of our todostate and the 2nd is the function we call to update those todos.
  
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  // storing our todo items inside of local storage using the hook useEffect. it is a function that will take a function for its first parameter and where we want to do things. every time something changes we want to call this first function, and how we determine when we call the function is we pass in an array of properties [todos]. so anytime we update our todos, we want to save our todos to localStorage
  useEffect(() => {
    // first passing in a key then a string (JSON.stringify)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, 
  

  // e is the event property
  function handleAddTodo(e) {
    // accessing whatever element we are currently referencing, in this case the input
    const name = todoNameRef.current.value
    if(name === '') return
    // there are two different ways to use setTodos. you can set an empty array, which would clear all of our todos. OR you can use the previous value (prevTodos) as a function call that will give us the previous todos that allows us to change that. We now can say our newTodos is equal to our prevTodos, spread it over an array [...prevTodos] and then add a new todo to that list. 

    setTodos(prevTodos => {
      return [...prevTodos, { id: Math.floor(Math.random() * 10000), name: name, complete: false}]
    })
    // set this to null so that when a user types in a todo and hits the button, it will clear out the text box
    todoNameRef.current.value = null

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
