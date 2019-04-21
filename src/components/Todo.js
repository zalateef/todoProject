import React from "react";
import PropTypes from "prop-types";

const Todo = ({ handleComplete, handleDelete, completed, title }) => {
  return (
    <div className = "item">
      <div className = "itemTitle">
        <span
          // applying some inline styles upon complete
          style={{
            textDecoration: completed ? "line-through" : "none",
            backgroundColor: completed ? "#ccccff" : "#f0f5f5"
          }}
        >
          {title}
        </span>
      </div>

      <div className="itemControls">
        <button className = {`btn doneBtn ${completed && 'disabled'}`}
                onClick={handleComplete}
                disabled={completed}
        >
        Done
        </button>
        <button className = 'btn delBtn' onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};
// some props type checking
Todo.propTypes = {
  handleComplete: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
};

export default Todo;