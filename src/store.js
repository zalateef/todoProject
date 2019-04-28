import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import rootReducer from './reducers/rootReducer';

import throttle from "lodash/throttle";
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const store = createStore(
  rootReducer, 
  persistedState,
  composeWithDevTools(
  applyMiddleware(thunk),
  // other store enhancers if any
));

store.subscribe(throttle(() => {
  saveState({
    todosList: store.getState().todosList
  });
}, 1000));

export default store;