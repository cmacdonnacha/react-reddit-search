import { createSlice, PayloadAction, Action, ThunkDispatch, AnyAction } from '@reduxjs/toolkit';
import { RootState } from '.';
import { Post } from 'models/Post';
import RedditAPI from 'services/RedditAPI';
import { REDDIT_URL, POSTS_LIMIT, DEFAULT_SUBREDDIT } from '../constants';

export interface PostsState {
  isLoading: boolean;
  hasErrors: boolean;
  posts: Post[];
  searchText: string;
  nextPageId: string;
  previousPageId: string;
}

export const initialState: PostsState = {
  isLoading: false,
  hasErrors: false,
  posts: [],
  searchText: '',
  nextPageId: '',
  previousPageId: '',
};

// Instead of dealing with reducers, actions, and all as separate files and individually creating all those action types, Redux Toolkit gives us the concept of slices.
// A slice automatically generates reducers, action types, and action creators all in one place. As such, you'll only have to create one folder - slices.
// Notice below, the reducers and actions will share the same name.
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPostsStarted: (state: PostsState) => {
      state.isLoading = true;
    },
    getPostsSuccess: (state: PostsState, action: PayloadAction<Post[]>) => {
      // Mutating the state directly is usually bad but the 'immer' package, which comes with Redux Toolkit, handles this for us.
      state.posts = action.payload;
      state.isLoading = false;
      state.hasErrors = false;
    },
    getPostsFailed: (state) => {
      state.isLoading = false;
      state.hasErrors = true;
    },
    searchTextUpdated: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    nextPageIdUpdated: (state, action: PayloadAction<string>) => {
      state.nextPageId = action.payload;
    },
    previousPageIdUpdated: (state, action: PayloadAction<string>) => {
      state.previousPageId = action.payload;
    },
  },
});

// Three actions generated from the slice. We don't have to define them above since they use the same names as the reducers.
export const {
  getPostsStarted,
  getPostsSuccess,
  getPostsFailed,
  searchTextUpdated,
  nextPageIdUpdated,
  previousPageIdUpdated,
} = postsSlice.actions;

// A selector which we'll use to access the 'posts' root state from a React component instead of using mapStateToProps (the old way).
// Note: This is not the `posts` property you see at the top of this file but rather the root Posts state in index.ts. They just share the same name.
export const postsSelector = (state: RootState) => state.posts;

// The reducer. Again this is exposed by the 'postsSlice' object created above. In the old Redux this was the equivalent to returning the current posts state inside a separate `postsReducer.ts` file.
export default postsSlice.reducer;

function getSelectedSubreddit(state: RootState) {
  const subreddit = state.posts.searchText ? state.posts.searchText : DEFAULT_SUBREDDIT;
  return subreddit;
}

// Asynchronous thunk action to fetch posts
export function fetchPosts(customUrl?: string) {
  return async (dispatch: ThunkDispatch<RootState, AnyAction, Action>, getState: () => RootState) => {
    try {
      dispatch(getPostsStarted());

      const subreddit = getSelectedSubreddit(getState());
      const defaultUrl = `${REDDIT_URL}/r/${subreddit}.json?limit=${POSTS_LIMIT}`;
      const url = customUrl || defaultUrl;

      const data = await RedditAPI.getPosts(url);

      dispatch(getPostsSuccess(data.posts));
      dispatch(nextPageIdUpdated(data.nextPageId));
      dispatch(previousPageIdUpdated(data.previousPageId));
    } catch (error) {
      dispatch(getPostsFailed());
    }
  };
}

// Asynchronous thunk action to fetch posts of next page
export function fetchNextPosts() {
  return async (dispatch: ThunkDispatch<RootState, AnyAction, Action>, getState: () => RootState) => {
    try {
      const subreddit = getSelectedSubreddit(getState());
      const url = `${REDDIT_URL}/r/${subreddit}.json?limit=${POSTS_LIMIT}&count=10&after=${getState().posts.nextPageId}`;

      // Re-use the logic inside fetchPosts by sending the url we need
      dispatch(fetchPosts(url));
    } catch (error) {
      dispatch(getPostsFailed());
    }
  };
}

// Asynchronous thunk action to fetch posts of previous page
export function fetchPreviousPosts() {
  return async (dispatch: ThunkDispatch<RootState, AnyAction, Action>, getState: () => RootState) => {
    try {
      const subreddit = getSelectedSubreddit(getState());
      const url = `${REDDIT_URL}/r/${subreddit}.json?limit=${POSTS_LIMIT}&count=10&before=${getState().posts.previousPageId}`;

      // Re-use the logic inside fetchPosts by sending the url we need
      dispatch(fetchPosts(url));
    } catch (error) {
      dispatch(getPostsFailed());
    }
  };
}
