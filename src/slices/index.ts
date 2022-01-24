import { combineReducers } from 'redux';
import postsReducer from './postsSlice';

const rootReducer = combineReducers({
  posts: postsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
