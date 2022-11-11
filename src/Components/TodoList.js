import { FaTrashAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

const TodoList = ({ todoList, setDeleteItemIndex, setCompleteItemIndex }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todoList.map((list, index) => (
          <div
            className={`todo-list-items ${
              list.completed === true ? "greens" : ""
            }`}
            key={index}
          >
            <li>
              <div
                className={`list-content ${
                  list.completed === true ? "strike" : ""
                } `}
              >
                {list.content}
              </div>

              <div className="fn-btn">
                <button
                  className="complete-button"
                  onClick={() => setCompleteItemIndex(index)}
                >
                  <FaCheckCircle />
                </button>
                <button
                  className="delete-button"
                  onClick={() => setDeleteItemIndex(index)}
                >
                  <FaTrashAlt />
                </button>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
