import React from 'react'

export default function Todo({ todo, toggleTodo }) {
    function handleTodoClick() {
        toggleTodo(todo.id)
    }

    return (
        <div>
            {/* printing the todo to the page */}
            {/* everytime we click its calling the onChange, which is calling our toggleTodo function with the id of the todo that we are inside of. that in turned gets passed up into TodoList which then gets passed to app.js that then calls the toggleTodo function(line 33) which resets our todolist variable to the new list of todos from the list we just clicked on */}
            <label>
            <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
            {todo.name}
            </label>
           
        </div>
    )
}
