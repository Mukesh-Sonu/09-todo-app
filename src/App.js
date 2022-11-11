import { useState } from "react";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";
import "./index.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [dropDownState, setDropDownState] = useState("All");

  const setDeleteItemIndex = (index) => {
    const newList = todoList.filter((_item, itemIndex) => index !== itemIndex);
    setTodoList([...newList]);
  };

  const setCompleteItemIndex = (index) => {
    todoList.map((_item, itemIndex) => {
      if (itemIndex === index) {
        todoList[index].completed = !todoList[index].completed;
        setTodoList([...todoList]);
      }
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
      />
    </div>
  );
}

export default App;
