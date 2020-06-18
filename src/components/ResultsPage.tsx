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
import PostsSortSelection from './PostsSortSelection';

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

const PageHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.h1`
  color: ${colours.navy};
  text-transform: capitalize;
  margin: 0;
  flex: 2;
`;

const ResultsPage = () => {
  // Use object destructuring to get what we need from the "posts" state.
  const { posts, isLoading, hasErrors, sortBy, searchText } = useSelector(postsSelector);
  const dispatch = useDispatch();

  // Once the posts have successfully loaded then display the selected subreddit
  // Using optional chaining "?" to ensure the first post is not null before accessing the subreddit property.
  const subreddit = posts[0]?.subreddit;

  // Handles fetching posts. This hook will fire each time any of the passed dependencies change
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch, sortBy, searchText]);

  const renderPageContent = () => {
    // Display loader while fetching posts
    if (isLoading) {
      return <Loader text={'Loading posts...'} />;
    }

    // Give user feedback when subreddit not found
    if (hasErrors || (!isLoading && posts.length === 0)) {
      return <NoSubredditFound />;
    }

    return <Posts />;
  };

  return (
    <Container>
      {posts.length > 0 && !hasErrors && (
        <PageHeaderContainer>
          <Title>{subreddit}</Title>
          <PostsSortSelection />
        </PageHeaderContainer>
      )}
      <Content>{renderPageContent()}</Content>
      {posts.length > 0 && !hasErrors && <PageFooter />}
    </Container>
  );
};

export default ResultsPage;
