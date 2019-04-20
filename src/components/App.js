import React from "react";
import AddTodo from "../containers/AddTodo";
import ConnectedTodoList from '../containers/ConnectedTodoList';

const App = () => (
  <div className="App">
    <div className="wrapper">
      <AddTodo />
      <ConnectedTodoList />
    </div>
  </div>
)

export default App;