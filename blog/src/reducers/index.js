<<<<<<< HEAD
import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import { reducer as formReducer } from 'redux-form';
=======
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import PostsReducer from "./reducer_posts";
>>>>>>> upstream/master

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
