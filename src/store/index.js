import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import layoutReducer from '../layout/redux/layoutReducer';
import todoReducer from '../todo/redux/todoReducer';

const reducers = combineReducers({  
  layout: layoutReducer,
  todo: todoReducer
});

export default createStore(reducers, applyMiddleware(thunk));
