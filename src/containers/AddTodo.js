import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
  
  const handleAddTodo = e => {
    e.preventDefault();
    const todo = e.target.elements.todo.value.trim();
    
    if (!todo) {
        return
    } else {
      dispatch(addTodo(todo));
      e.target.elements.todo.value = "";
    }
  };

  return (
      <div className="addTodo">
        <h1>To-Do App</h1>
        <form onSubmit={handleAddTodo}>
          <input type="text" name="todo" />
          <button className = 'addBtn'>Add To-Do</button>
        </form>
      </div>
  )
}

export default connect()(AddTodo)