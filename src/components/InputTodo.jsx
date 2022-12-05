import React, {useState} from 'react'

const InputTodo = (props) => {
  
  const [title, setTitle] = useState("");

  const onChange = e => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  if (title.trim()) {
        props.addTodoItemProps(title)
        setTitle("")
  } else {
    return
  }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Add new Todo ...' value={title} onChange={onChange}/>
      <button type="submit">Submit</button>
    </form>
  )
}

export default InputTodo