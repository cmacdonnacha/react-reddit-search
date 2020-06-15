import { Post } from 'models/Post';
import { REDDIT_API_URL } from '../constants';
import FetchAPI from './FetchAPI';

const RedditAPI = {
  getPosts: async () => {
    const response = await FetchAPI.get(REDDIT_API_URL);
    const posts: Post[] = response;
    return posts;
  },
};

export default RedditAPI;
