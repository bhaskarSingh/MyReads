import { combineReducers } from 'redux';
import books from './book_reducer';
const rootReducer = combineReducers({
    books
});

export default rootReducer;