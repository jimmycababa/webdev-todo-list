import React from 'react'
import Todo from './Todo'

// todos is the prop that we are passing into the app function in app.js
export default function TodoList({ todos, toggleTodo }) {
    return (
        
            /* rendering out the todos prop. its inside curly braces telling the page that its JS code */
            /* we are now printing out each one of the todos by mapping over our currrent array and return elementsof our actual todos*/
            // we set a key to a unique element so that react will only re-render or change the components that actually change in our array instead of re-rendering all of them every time
            todos.map(todo => {
                return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
            })
        
    )
}
