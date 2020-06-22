import { combineReducers } from 'redux';
import topNewsReducer from './topNewsReducer';
import categoriesReducer from './categoriesReducer';

export default combineReducers({
  topNews: topNewsReducer,
  categories: categoriesReducer,
});
