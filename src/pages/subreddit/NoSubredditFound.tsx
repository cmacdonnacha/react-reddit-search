import React from 'react';
import styled from 'styled-components/macro';
import subredditNotFoundImage from 'assets/subreddit-not-found.png';
import { screenSize } from 'constants/screenSizes';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  margin-bottom: 20px;
  width: 400px;
  height: 250px;

  @media (max-width: ${screenSize.medium}) {
    width: 250px;
    height: 150px;
  }
`;

const Text = styled.span`
  font-size: 1.2rem;

  @media (max-width: ${screenSize.medium}) {
    font-size: 1rem;
  }
`;

const NoSubredditFound = () => {
  return (
    <Container>
      <Image src={subredditNotFoundImage} />
      <Text>{"Oops! Couldn't find subreddit."}</Text>
    </Container>
  );
};

export default NoSubredditFound;
