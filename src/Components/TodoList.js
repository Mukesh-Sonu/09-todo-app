import { FaTrashAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

const TodoList = ({
  todoList,
  setDeleteItemIndex,
  setCompleteItemIndex,
  dropDownState,
}) => {
  const listState = (item) => {
    if (dropDownState === "Completed") {
      return item.completed && item;
    } else if (dropDownState === "Uncompleted") {
      return !item.completed && item;
    }
    return true;
  };

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {!todoList.length ? (
          <h3>Enter your todo's.........</h3>
        ) : (
          todoList.filter(listState).map((list, index) => (
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
                    onClick={() => setCompleteItemIndex(list.id)}
                  >
                    <FaCheckCircle />
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => setDeleteItemIndex(list.id)}
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </li>
            </div>
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoList;
