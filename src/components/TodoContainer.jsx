import React, {useState} from "react";
import TodosList from "./TodosList"
import Header from "./Header";

const TodoConatiner = () => {
  const [todos, settodos] = useState([
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

    return (
        <>
            <Header />
            <TodosList todos={todos} />
        </>
    )
}

export default TodoConatiner