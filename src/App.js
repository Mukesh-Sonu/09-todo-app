import { useEffect, useState } from "react";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";
import "./index.css";

function App() {
  const [todoList, setTodoList] = useState(() => {
    return JSON.parse(localStorage.getItem("todoList")) || [];
  });
  const [dropDownState, setDropDownState] = useState("All");

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const setDeleteItemIndex = (id) => {
    const newList = todoList.filter((item) => item.id !== id);
    setTodoList([...newList]);
  };

  const setCompleteItemIndex = (id) => {
    todoList.map((item) => {
      if (id === item.id) {
        item.completed = !item.completed;
      }
      setTodoList([...todoList]);
      return null;
    });
  };

  return (
    <div>
      <header>
        <h1>Mukesh's Todo list</h1>
      </header>
      <Form
        setTodoList={setTodoList}
        dropDownState={dropDownState}
        setDropDownState={setDropDownState}
      />
      <TodoList
        todoList={todoList}
        setDeleteItemIndex={setDeleteItemIndex}
        setCompleteItemIndex={setCompleteItemIndex}
        dropDownState={dropDownState}
      />
    </div>
  );
}

export default App;
