////////////// Add a To-Do
export const FETCH_ADD_BEGIN   = 'FETCH_ADD_BEGIN';
export const FETCH_ADD_SUCCESS = 'FETCH_ADD_SUCCESS';
export const FETCH_ADD_FAILURE = 'FETCH_ADD_FAILURE';

export const fetchAddBegin = () => ({
  type: FETCH_ADD_BEGIN
});

export const fetchAddSuccess = todosList => ({
  type: FETCH_ADD_SUCCESS,
  payload:  {todosList} 
});

export const fetchAddFailure = error => ({
  type: FETCH_ADD_FAILURE,
  payload: { error }
});

export function fetchAdd(title) {
  return dispatch => {
    dispatch(fetchAddBegin());
    return addTodo(title)
      .then(json => {
        dispatch(fetchAddSuccess(json));
        return json;
      })
      .catch(error =>
        dispatch(fetchAddFailure(error))
      );
  };
}

function addTodo (title) {
  return fetch('https://practiceapi.devmountain.com/api/tasks', {
    method: 'POST',
    body: JSON.stringify({
      title: title,
      completed: false
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(handleErrors)
  .then(response => response.json())
}

////////////// Delete a To-Do
export const FETCH_DELETE_BEGIN   = 'FETCH_DELETE_BEGIN';
export const FETCH_DELETE_SUCCESS = 'FETCH_DELETE_SUCCESS';
export const FETCH_DELETE_FAILURE = 'FETCH_DELETE_FAILURE';

export const fetchDeleteBegin = () => ({
  type: FETCH_DELETE_BEGIN
});

export const fetchDeleteSuccess = todosList => ({
  type: FETCH_DELETE_SUCCESS,
  payload:  {todosList} 
});

export const fetchDeleteFailure = error => ({
  type: FETCH_DELETE_FAILURE,
  payload: { error }
});

function deleteTodo(id) {
  return fetch('https://practiceapi.devmountain.com/api/tasks' + '/' + id, {
    method: 'DELETE'
  })
  .then(handleErrors)
  .then(response => response.json());
}

export function fetchDelete(id) {
  return dispatch => {
    dispatch(fetchDeleteBegin());
    return deleteTodo(id)
      .then(json => {
        dispatch(fetchDeleteSuccess(json));
        return json;
      })
      .catch(error =>
        dispatch(fetchDeleteFailure(error))
      );
  };
}

////////////// Complete a To-Do
export const FETCH_COMPLETE_BEGIN   = 'FETCH_COMPLETE_BEGIN';
export const FETCH_COMPLETE_SUCCESS = 'FETCH_COMPLE-++TE_SUCCESS';
export const FETCH_COMPLETE_FAILURE = 'FETCH_COMPLETE_FAILURE';

export const fetchCompleteBegin = () => ({
  type: FETCH_COMPLETE_BEGIN
});

export const fetchCompleteSuccess = todosList => ({
  type: FETCH_COMPLETE_SUCCESS,
  payload:  {todosList} 
});

export const fetchCompleteFailure = error => ({
  type: FETCH_COMPLETE_FAILURE,
  payload: { error }
});

function completeTodo(id) {
  return fetch('https://practiceapi.devmountain.com/api/tasks' + '/' + id, {
    method: 'PUT'
  })
  .then(handleErrors)
  .then(response => response.json());
}
export function fetchComplete(id) {
  return dispatch => {
    dispatch(fetchCompleteBegin());
    return completeTodo(id)
      .then(json => {
        dispatch(fetchCompleteSuccess(json));
        return json;
      })
      .catch(error =>
        dispatch(fetchCompleteFailure(error))
      );
  };
}

////////////// Fetching todo list from test api
export const FETCH_TODOS_BEGIN   = 'FETCH_TODOS_BEGIN';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';

export const fetchTodosBegin = () => ({
  type: FETCH_TODOS_BEGIN
});

export const fetchTodosSuccess = todosList => ({
  type: FETCH_TODOS_SUCCESS,
  payload:  {todosList}
});

export const fetchTodosFailure = error => ({
  type: FETCH_TODOS_FAILURE,
  payload: { error }
});

function getTodos() {
  return fetch("https://practiceapi.devmountain.com/api/tasks")
    .then(handleErrors)
    .then(res => res.json());
}

export function fetchTodos() {
  return dispatch => {
    dispatch(fetchTodosBegin());
    return getTodos()
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