const todos = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            id: action.id,
            title: action.title,
            completed: false
          }
        ]
      case 'COMPLETE_TODO':
        return state.map(todo =>
          (todo.id === action.id)
            ? {...todo, completed: true}
            : todo
        )
      case 'DELETE_TODO':
        return state.filter(todo =>
          (todo.id !== action.id)
        )
          
      default:
        return state
    }
  }
  
  export default todos