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
import { screenSize } from 'constants/screenSizes';
import NoSubredditFound from './NoSubredditFound';

const Container = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: white;
  margin: 20px;
  border-radius: 5px;
  padding: 20px;
  overflow: hidden;

  @media (min-width: ${screenSize.medium}) {
    max-width: 1080px;
    align-self: center;
    width: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  overflow: hidden;
`;

const Title = styled.h1`
  color: ${colours.navy};
  text-transform: capitalize;
  margin-top: 0;
`;

const ResultsPage = () => {
  const { posts, isLoading, hasErrors } = useSelector(postsSelector);
  const dispatch = useDispatch();

  // Once the posts have successfully loaded then display the selected subreddit
  // Using optional chaining "?" to ensure the first post is not null before accessing the subreddit property.
  const subreddit = posts[0]?.subreddit;

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const renderPageContent = () => {
    if (isLoading) {
      return <Loader text={'Loading posts...'} />;
    }

    if (hasErrors) {
      return <NoSubredditFound />;
    }

    return <Posts />;
  };

  return (
    <Container>
      <Title>{subreddit}</Title>
      <Content>{renderPageContent()}</Content>
      {posts.length > 0 && !hasErrors && <PageFooter />}
    </Container>
  );
};

export default ResultsPage;
