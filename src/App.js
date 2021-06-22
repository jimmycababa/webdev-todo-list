// app.js is where we start because it is the root of our application
import React from 'react'
import TodoList from './TodoList';

function App() {
  return (
    // the JSX allows us to embed components inside other components
    <div>
    <TodoList />
    {/* input for user to add new todos */}
    <input type="text" />
    </div>
  )
}
export default App;
