import React, {useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
import { Route, Switch } from "react-router-dom";

//components
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList"
import About from "../pages/About";
import NotMatch from "../pages/NotMatch";
import Navbar from "./Navbar";

//styleSheet
import '../App.css'


const TodoContainer = () => {

  const getInitialTodos = () => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'))

    return savedTodos || []
  }

  const [todos, setTodos] = useState(getInitialTodos());

  useEffect(() => {
    const temp = JSON.stringify(todos)
    localStorage.setItem('todos', temp)

  }, [todos]);

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
        <Navbar />
        <Switch>
            <Route exact path="/">
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
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="*">
                <NotMatch />
            </Route>
        </Switch>
        </>
    )
}

export default TodoContainer