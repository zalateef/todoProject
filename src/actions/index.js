//import mockData and loading from localStorage to fake api loading.
import {jsonState} from '../test/mockData';
import { loadState } from './../localStorage';

////////////// Add a To-Do
export const FETCH_ADD_BEGIN   = 'FETCH_ADD_BEGIN';
export const FETCH_ADD_SUCCESS = 'FETCH_ADD_SUCCESS';
export const FETCH_ADD_FAILURE = 'FETCH_ADD_FAILURE';

export const fetchAddBegin = () => ({
  type: FETCH_ADD_BEGIN
});

export const fetchAddSuccess = todos => ({
  type: FETCH_ADD_SUCCESS,
  payload:  {todos} 
});

export const fetchAddFailure = error => ({
  type: FETCH_ADD_FAILURE,
  payload: { error }
});

// fake function to be replaced with function to hit api.
function fakeAddTodo (title) {
  const persistedState = loadState(); // loading state from local storage
  const promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(
        [
          ...persistedState.todosList.todos,
          {
            id: Date.now(), //using date now as id
            title: title,
            completed: false
          }
        ]
      );
    }, 2000);
  });
  return promise;
}

export function fetchAdd(title) {
  return dispatch => {
    dispatch(fetchAddBegin());
    return fakeAddTodo(title)
      .then(data => {
        dispatch(fetchAddSuccess(data));
        return data;
      })
      .catch(error =>
        dispatch(fetchAddFailure(error))
      );
  };
}

////////////// Delete a To-Do
export const FETCH_DELETE_BEGIN   = 'FETCH_DELETE_BEGIN';
export const FETCH_DELETE_SUCCESS = 'FETCH_DELETE_SUCCESS';
export const FETCH_DELETE_FAILURE = 'FETCH_DELETE_FAILURE';

export const fetchDeleteBegin = () => ({
  type: FETCH_DELETE_BEGIN
});

export const fetchDeleteSuccess = todos => ({
  type: FETCH_DELETE_SUCCESS,
  payload:  {todos} 
});

export const fetchDeleteFailure = error => ({
  type: FETCH_DELETE_FAILURE,
  payload: { error }
});

// fake function to be replaced with function to hit api.
function fakeDeleteTodo(id) {
  const persistedState = loadState(); // loading state from local storage
  const promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(
        // 
        persistedState.todosList.todos.filter(todo =>
          (todo.id !== id)
        )
      );
    }, 2000);
  });
  return promise;
}



export function fetchDelete(id) {
  return dispatch => {
    dispatch(fetchDeleteBegin());
    return fakeDeleteTodo(id)
      .then(data => {
        dispatch(fetchDeleteSuccess(data));
        return data;
      })
      .catch(error =>
        dispatch(fetchDeleteFailure(error))
      );
  };
}

////////////// Complete a To-Do
export const FETCH_COMPLETE_BEGIN   = 'FETCH_COMPLETE_BEGIN';
export const FETCH_COMPLETE_SUCCESS = 'FETCH_COMPLETE_SUCCESS';
export const FETCH_COMPLETE_FAILURE = 'FETCH_COMPLETE_FAILURE';

export const fetchCompleteBegin = () => ({
  type: FETCH_COMPLETE_BEGIN
});

export const fetchCompleteSuccess = todos => ({
  type: FETCH_COMPLETE_SUCCESS,
  payload:  {todos} 
});

export const fetchCompleteFailure = error => ({
  type: FETCH_COMPLETE_FAILURE,
  payload: { error }
});

// fake function to be replaced with function to hit api.
function fakeCompleteTodo(id) {
  const persistedState = loadState();
  const promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(
        // finding the matching id and marking it as completed
        persistedState.todosList.todos.map(todo =>
          (todo.id === id)
            ? {...todo, completed: true}
            : todo
          )
      );
    }, 2000);
  });
  return promise;
}

export function fetchComplete(id) {
  return dispatch => {
    dispatch(fetchCompleteBegin());
    return fakeCompleteTodo(id)
      .then(data => {
        dispatch(fetchCompleteSuccess(data));
        return data;
      })
      .catch(error =>
        dispatch(fetchCompleteFailure(error))
      );
  };
}

////////////// Fetching todo list from json file if nothing in localStorage then from localStorage
export const FETCH_TODOS_BEGIN   = 'FETCH_TODOS_BEGIN';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';

export const fetchTodosBegin = () => ({
  type: FETCH_TODOS_BEGIN
});

export const fetchTodosSuccess = todos => ({
  type: FETCH_TODOS_SUCCESS,
  payload:  {todos}
});

export const fetchTodosFailure = error => ({
  type: FETCH_TODOS_FAILURE,
  payload: { error }
});

// fake function to be replaced with function to hit api.
function fakeGetTodos() {
  const persistedState = loadState();
  const promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(
        // if nothing in localStorage will load json file then will use localStorage
        persistedState.todosList.todos.length > 0 ?
          persistedState.todosList.todos :
          jsonState.todosList.todos
      );
    }, 2000);
  });
  return promise;
}

export function fetchTodos() {
  return dispatch => {
    dispatch(fetchTodosBegin());
    return fakeGetTodos()
      .then(todos => {
        dispatch(fetchTodosSuccess(todos));
        return todos;
      })
      .catch(error =>
        dispatch(fetchTodosFailure(error))
      );
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}