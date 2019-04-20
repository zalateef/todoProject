import React from "react";
import PropTypes from 'prop-types';
import Todo from "./Todo";

const TodoList = ({ todos, completeTodo, deleteTodo }) => {
  return (
    <div className="list">
      <h4 className="center">Your Todo(s)</h4>
      {
        // if no todos show nice message
        todos.length === 0 && <p>Please add a todo to get started!</p>
      }
      {todos.map(todo =>
        <Todo 
          key={todo.id}
          {...todo}
          handleComplete={() => completeTodo(todo.id)}
          handleDelete={() => deleteTodo(todo.id)}
        />
      )}
    </div>
  );
};

// some props type checking
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired).isRequired,
  completeTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default TodoList