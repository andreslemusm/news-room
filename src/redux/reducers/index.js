import { combineReducers } from 'redux';
import topNewsReducer from './topNewsReducer';
import categoriesReducer from './categoriesReducer';
import headlinesReducer from './headlinesReducer';

export default combineReducers({
  topNews: topNewsReducer,
  categories: categoriesReducer,
  headlines: headlinesReducer,
});
