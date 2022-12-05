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
    <form onSubmit={handleSubmit} className="form-container">
      <input 
        type="text" 
        placeholder='Add new Todo ...' 
        className="input-text"
        value={title} 
        onChange={onChange}
      />
      <button type="submit" className="input-submit">Submit</button>
    </form>
  )
}

export default InputTodo