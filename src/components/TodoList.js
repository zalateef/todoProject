import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Todo from "./Todo";

export default class TodoList extends Component {

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const {error, loading, todos } = this.props;

    if(error) {
      return <div>Error! {error.message}</div>
    }

    return (
    <div className="list">
      <h4 className="center">Your Todo(s)</h4>
      {
        // if no todos show nice message
        todos.length === 0 && <p>Please add a todo to get started!</p>
      }
      {loading && <div>Loading...</div>}
      {todos.map(todo =>
        <Todo 
          key={todo.id}
          {...todo}
          handleComplete={() => this.props.fetchComplete(todo.id)}
          handleDelete={() => this.props.fetchDelete(todo.id)}
        />
      )}
    </div>
    )
  }
}

// some props type checking
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    // userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired).isRequired,
  fetchComplete: PropTypes.func.isRequired,
  fetchDelete: PropTypes.func.isRequired
}