import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList"

//styleSheet
import '../App.css'


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
        if(id === todo.id) {
            return {
                ...todo,
                completed: !todo.completed
            }
        } 
        return todo
    }))
  }

  const deleteTodo = (id) => {

    setTodos(
        [...todos.filter((todo) => {
            return todo.id !== id
        })]
    )
  }

  const addTodoItem = (title) => {
    const newTodo = {
        id: uuidv4(),
        title: title,
        completed: false
    }
    setTodos([...todos, newTodo])
  }

  const setUpdate = (updatedTitle, id) => {
    setTodos(todos.map((todo) => {
        if(id === todo.id) {
            return {
                ...todo,
                title: updatedTitle
            }
        } 
        return todo
    }))
  }

    return (
        <>
            <div className="container">
                <div className="inner">
                    <Header />
                    <InputTodo 
                        addTodoItemProps={addTodoItem}
                    />
                    <TodosList 
                        todos={todos} 
                        toggleCompletedProps={toggleCompleted}
                        deleteTodoProps={deleteTodo}
                        setUpdateProps={setUpdate}
                    />
                </div>
            </div>
        </>
    )
}

export default TodoConatiner