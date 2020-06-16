import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import { colours } from 'constants/colours';
import Posts from './Posts';
import { postsSelector } from 'slices/postsSlice';
import Loader from './Loader';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchPosts } from 'slices/postsSlice';
import PageFooter from './PageFooter';

const Container = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: white;
  margin: 20px;
  border-radius: 5px;
  padding: 10px;
`;

const Content = styled.article`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: white;
  overflow-y: auto;
  border-radius: 5px;
`;

const Title = styled.h1`
  color: ${colours.navy};
  text-transform: capitalize;
`;

const ResultsPage = () => {
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
        <Title>{subreddit}</Title>
        <Posts />
      </div>
    );
  };

  return (
    <Container>
      <Content>{renderPageContent()}</Content>
      {posts.length > 0 && <PageFooter />}
    </Container>
  );
};

export default ResultsPage;
