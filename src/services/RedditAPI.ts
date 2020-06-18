import { Post } from 'models/Post';
import FetchAPI from './FetchAPI';

const RedditAPI = {
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
};

export default RedditAPI;
