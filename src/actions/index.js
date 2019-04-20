// Temp id using uuid library
import uuid from 'uuid';

export const addTodo = title => ({
  type: 'ADD_TODO',
  id: uuid(),
  title
})

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id
})

export const completeTodo = id => ({
  type: 'COMPLETE_TODO',
  id
})