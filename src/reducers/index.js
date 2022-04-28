import formVisibleReducer from './form-visible-reducer';
import sortTypeReducer from './sort-type-reducer';
import postListReducer from './post-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  mainPostList: postListReducer,
  sortType: sortTypeReducer
});

export default rootReducer;
