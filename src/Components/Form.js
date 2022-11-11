import { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import DropDown from "./DropDown";
import { v4 as uuid } from "uuid";

const Form = ({ setTodoList, dropDownState, setDropDownState }) => {
  const [inputText, setInputText] = useState("");
  const unique_id = uuid();
  const small_id = unique_id.slice(0, 8);

  const handleInputSubmit = (e) => {
    e.preventDefault();
    if (!inputText) return;
    setTodoList((prev) => [
      ...prev,
      { content: inputText, completed: false, id: small_id },
    ]);
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
