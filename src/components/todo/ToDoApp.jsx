import "./todo.css";
import TodoData from "./TodoData";
import TodoNew from "./TodoNew";
import reactLogo from "../../assets/react.svg";
import { useState } from "react";
const ToDoApp = () => {
  const [todoList, setTodoList] = useState([
    // { id: 1, name: "Learning React" },
    // { id: 2, name: "Watching Youtube" },
  ]);

  const deleteTodo = (id) => {
    const newTodo = todoList.filter((item) => item.id !== id);
    setTodoList(newTodo);
    console.log(">> delete todos");
  };
  const hoidanit = "Eric Arsenal";
  const age = 25;
  const data = {
    address: "hanoi",
    coutry: "Vietnam",
  };
  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name,
    };
    setTodoList([...todoList, newTodo]);
  };
  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew addNewTodo={addNewTodo} />

      {todoList.length === 0 ? (
        <div className="todo-image">
          <img src={reactLogo} />
        </div>
      ) : (
        <TodoData todoList={todoList} deleteTodo={deleteTodo} />
      )}
      {/* {todoList.length !== 0 && <TodoData todoList={todoList} />}
  
    {todoList.length === 0 && (
      <div className="todo-image">
        <img src={reactLogo} />
      </div>
    )} */}
    </div>
  );
};
export default ToDoApp;
