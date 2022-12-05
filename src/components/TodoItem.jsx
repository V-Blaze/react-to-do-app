import React, {useState} from 'react'
//styleSheet
import './TodoItem.css'

const TodoItem = (props) => {
    const [editing, setEditing] = useState(false);

    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
      }

      const {completed, title, id} = props.todo

      const handleEditing = () => {
        setEditing(true)
      }

      const handleUpdateDone = (event) => {
        if(event.key === 'Enter') {
            setEditing(false)
        }
      }

      let viewMode = {}
      let editMode = {}

      if(editing) {
        viewMode.display = "none"
      } else {
        editMode.display = "none"
      }

  return (
    <>
    <li className='item'>
        <div onDoubleClick={handleEditing} style={viewMode}>
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
        </div>
        <input 
            type="text" 
            style={editMode} 
            className='textInput' 
            value={title}
            onChange={(e) => {props.setUpdateProps(e.target.value, id)}}
            onKeyDown={handleUpdateDone}
        />
    </li>
    </>
  )
}

export default TodoItem