import { Post } from 'models/Post';
import FetchAPI from './FetchAPI';
import { REDDIT_URL, POSTS_LIMIT, DEFAULT_SUBREDDIT } from '../constants';
import { RootState } from 'slices';

/**
 * This service is used to communicate with the Reddit REST api
 */
const RedditAPI = {
  /**
   * Gets subreddit posts
   */
  getPosts: async (url: string) => {
    const response = await FetchAPI.get(url);

    // Posts
    const data = response.data.children;

    // This is used to fetch the next batch of posts (i.e when "Next" button is clicked)
    const nextPageId = response.data.after;

    // This is used to fetch the previous batch of posts (i.e when "Previous" button is clicked)
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
   * Extracting the base url here avoids duplication.
   */
  getBaseUrl: (state: RootState) => {
    const subreddit = state.posts.searchText || DEFAULT_SUBREDDIT;
    const sortBy = state.posts.sortBy;
    const baseUrl = `${REDDIT_URL}/r/${subreddit}/${sortBy}.json?limit=${POSTS_LIMIT}`;
    return baseUrl;
  },
};

export default RedditAPI;
