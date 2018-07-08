import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import BookAuthorsReducer from './reducer_bookAuthors';

import ActiveBook from './reducer_active_book';

// What we set over here is just what piece of application state  
// is assigned to which reducer
const rootReducer = combineReducers({
    books: BooksReducer,
    authors: BookAuthorsReducer,
    activeBook: ActiveBook
});

export default rootReducer;
