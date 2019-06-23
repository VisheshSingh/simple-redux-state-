import { counterReducer } from './counterReducer';
import { logReducer } from './logReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  counter: counterReducer,
  isLoggedIn: logReducer
});

export default rootReducer;
