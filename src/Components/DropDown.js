import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

const DropDown = ({ dropDownState, setDropDownState }) => {
  const [open, setOpen] = useState(false);

  const dropDowns = ["All", "Completed", "Uncompleted"];

  const handleDropDownClick = () => {
    setOpen(!open);
  };

  return (
    <div className="dropdown" onClick={handleDropDownClick}>
      <div className="dropdown-btn">
        {dropDownState}
        <>
          <FaCaretDown className="dropdown-caret" />
        </>
      </div>
      {open && (
        <div className="dropdown-content">
          {dropDowns.map((item, index) => (
            <div
              key={index}
              className="dropdown-items"
              onClick={(e) => setDropDownState(e.target.textContent)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default DropDown;
