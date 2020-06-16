import React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';
import { postsSelector } from 'slices/postsSlice';
import { Post } from 'models/Post';

const Container = styled.div`
  display: flex;
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const PostsList = () => {
  const { posts } = useSelector(postsSelector);

  return (
    <Container>
      <ul>
        {posts.map((post: Post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </Container>
  );
};

export default PostsList;
