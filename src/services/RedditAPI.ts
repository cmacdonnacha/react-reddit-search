import { Post } from 'models/Post';
import FetchAPI from './FetchAPI';
import { REDDIT_URL, POSTS_LIMIT, DEFAULT_SUBREDDIT } from '../constants';
import { RootState } from 'slices';

const RedditAPI = {
  /**
   * Gets reddit posts
   */
  getPosts: async (url: string) => {
    const response = await FetchAPI.get(url);
    const data = response.data.children;
    const nextPageId = response.data.after;
    const previousPageId = response.data.before;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const posts: Post[] = data.map((post: any) => {
      return {
        id: post.data.id,
        title: post.data.title,
        subreddit: post.data.subreddit,
        thumbnail: post.data.thumbnail,
        upvotes: post.data.ups,
      };
    });

    return {
      posts,
      nextPageId,
      previousPageId,
    };
  },
  /**
   * Gets the base url used when calling the Reddit REST api.
   *
   * Extracting the base url here to avoid duplication.
   */
  getBaseUrl: (state: RootState) => {
    const subreddit = state.posts.searchText || DEFAULT_SUBREDDIT;
    const baseUrl = `${REDDIT_URL}/r/${subreddit}.json?limit=${POSTS_LIMIT}`;
    return baseUrl;
  },
};

export default RedditAPI;
