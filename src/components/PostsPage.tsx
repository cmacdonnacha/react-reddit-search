import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import { colours } from 'constants/colours';
import PostsList from './PostsList';
import { postsSelector } from 'slices/postsSlice';
import Loader from './Loader';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchPosts } from 'slices/postsSlice';

const Container = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: white;
  margin: 20px;
  border-radius: 5px;

  & h1 {
    margin: 0;
    color: ${colours.navy};
  }
`;

const Content = styled.article`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: white;
  overflow-y: auto;
  align-items: center;
  border-radius: 5px;
`;

const PostsPage = () => {
  const { posts, isLoading, hasErrors } = useSelector(postsSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const renderPageContent = () => {
    if (isLoading) {
      return <Loader text={'Loading posts...'} />;
    }

    if (hasErrors) {
      return <span>Could not find subreddit</span>;
    }

    const subreddit = posts[0]?.subreddit;

    return (
      <div>
        <h1>{subreddit}</h1>
        <PostsList />
      </div>
    );
  };

  return (
    <Container>
      <Content>{renderPageContent()}</Content>
    </Container>
  );
};

export default PostsPage;
