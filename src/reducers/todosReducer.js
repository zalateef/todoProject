import {
  FETCH_TODOS_BEGIN,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  FETCH_ADD_BEGIN,
  FETCH_ADD_SUCCESS,
  FETCH_ADD_FAILURE,
  FETCH_DELETE_BEGIN,
  FETCH_DELETE_SUCCESS,
  FETCH_DELETE_FAILURE,
  FETCH_COMPLETE_BEGIN,
  FETCH_COMPLETE_SUCCESS,
  FETCH_COMPLETE_FAILURE
} from '../actions/index';

const initialState = {
  todos: [],
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ADD_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case FETCH_ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload.todosList
      }
    case FETCH_ADD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        todos: []
      }
/////////////////////////////////////////////////////////////////
    case FETCH_COMPLETE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case FETCH_COMPLETE_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload.todosList
      }
    case FETCH_COMPLETE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        todos: []
      }
/////////////////////////////////////////////////////////////////
    case FETCH_DELETE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case FETCH_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload.todosList
      }
    case FETCH_DELETE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        todos: []
      }
/////////////////////////////////////////////////////////////////
    case FETCH_TODOS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }

    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload.todosList
      };

    case FETCH_TODOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        todos: []
      };
/////////////////////////////////////////////////////////////////
    default:
      return state
  }
}