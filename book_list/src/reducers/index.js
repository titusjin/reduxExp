import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import BookAuthorsReducer from './reducer_bookAuthors';

import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
    books: BooksReducer,
    authors: BookAuthorsReducer,
    activeBook: ActiveBook
});

export default rootReducer;
