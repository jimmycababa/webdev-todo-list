import React from 'react'

export default function Todo({ todo }) {
    return (
        <div>
            {/* printing the todo to the page */}
            <label>
            <input type="checkbox" checked={todo.complete} />
            {todo.name}
            </label>
           
        </div>
    )
}
