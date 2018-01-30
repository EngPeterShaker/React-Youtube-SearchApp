import { combineReducers } from 'redux';
import BooksReducers from "./reducers_books";

const rootReducer = combineReducers({
  // state: (state = {}) => state
  books:BooksReducers
});

export default rootReducer;
