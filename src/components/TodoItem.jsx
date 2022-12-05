import React from 'react'
//styleSheet
import './TodoItem.css'

const TodoItem = (props) => {
    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
      }

      const {completed, title, id} = props.todo
  return (
    <>
    <li className='item'>
        <input 
            type="checkbox" 
            className='checkbox'
            checked={completed} 
            onChange={()=> props.toggleCompletedProps(id)} 
        />
        <span style={completed ? completedStyle : null}>
            {title}
        </span>
        <button onClick={()=> props.deleteTodoProps(id)} >Del</button>
    </li>
    </>
  )
}

export default TodoItem