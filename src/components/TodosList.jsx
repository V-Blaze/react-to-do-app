import React from 'react'
import TodoItem from './TodoItem'

const TodosList = (props) => {
  return (
    <div>
      <ul>
          {props.todos.map(todo => (
              <TodoItem key={todo.id} todo={todo} />
          ))}
      </ul>
    </div>
  )
}

export default TodosList