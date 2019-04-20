import { connect } from 'react-redux';
import { completeTodo } from '../actions';
import { deleteTodo } from '../actions';
import TodoList from '../components/TodoList';


const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  completeTodo: id => dispatch(completeTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)