import React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';
import { postsSelector } from 'slices/postsSlice';
import { Post } from 'models/Post';
import PostListItem from './PostListItem';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1;
  list-style: none;
  padding: 0;
  overflow-y: auto;
  height: 100%;
`;

const Posts = () => {
  const { posts } = useSelector(postsSelector);

  return (
    <List>
      {posts.map((post: Post) => {
        return (
          <li key={post.id}>
            <PostListItem post={post} />
          </li>
        );
      })}
    </List>
  );
};

export default Posts;
