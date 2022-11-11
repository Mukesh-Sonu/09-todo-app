import { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import DropDown from "./DropDown";

const Form = ({ setTodoList, dropDownState, setDropDownState }) => {
  const [inputText, setInputText] = useState("");

  const handleInputSubmit = (e) => {
    e.preventDefault();
    if (!inputText) return;
    setTodoList((prev) => [...prev, { content: inputText, completed: false }]);
    setInputText("");
  };

  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  return (
    <form>
      <input
        className="todo-input"
        value={inputText}
        type="text"
        onChange={handleInputText}
      />
      <button className="todo-button" type="submit" onClick={handleInputSubmit}>
        <FaPlusSquare />
      </button>

      <div>
        <DropDown
          dropDownState={dropDownState}
          setDropDownState={setDropDownState}
        />
      </div>
    </form>
  );
};

export default Form;
