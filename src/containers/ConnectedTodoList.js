import { connect } from 'react-redux';
import { fetchComplete, fetchDelete, fetchTodos } from '../actions';
import TodoList from '../components/TodoList';

const mapStateToProps = state => ({
  todos: state.todosList.todos,
  loading: state.todosList.loading,
  error: state.todosList.error
})

const mapDispatchToProps = dispatch => ({
  completeTodo: id => dispatch(completeTodo(id)),
  fetchDelete: id => dispatch(fetchDelete(id)),
  fetchComplete: id => dispatch(fetchComplete(id)),
  fetchTodos: () => dispatch(fetchTodos())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)