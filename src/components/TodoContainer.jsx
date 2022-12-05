import React, {useState} from "react";
import TodosList from "./TodosList"
import Header from "./Header";

const TodoConatiner = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Setup development environment",
      completed: true
    },
    {
      id: 2,
      title: "Develop website and add content",
      completed: false
    },
    {
      id: 3,
      title: "Deploy to live server",
      completed: false
    }
  ]);

  const toggleCompleted = (id) => {

    setTodos(todos.map((todo) => {
        if(id == todo.id) {
            return {
                ...todo,
                completed: !todo.completed
            }
        } 
        return todo
    }))
  }

    return (
        <>
            <Header />
            <TodosList todos={todos} toggleCompletedProps={toggleCompleted} />
        </>
    )
}

export default TodoConatiner