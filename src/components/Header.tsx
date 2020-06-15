import React from 'react';
import styled from 'styled-components/macro';
import { screenSize } from 'constants/screenSizes';
import redditLogo from 'assets/reddit-logo.png';
import redditIcon from 'assets/reddit-icon.png';
import SearchBar from './SearchBar';
import userProfileImage from 'assets/user-profile.png';
import Avatar from './Avatar';

const Container = styled.header`
  grid-area: header;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 20px;
`;

const RedditLogo = styled.img`
  height: 30px;

  @media (max-width: ${screenSize.medium}) {
    display: none;
  }
`;

const RedditIcon = styled.img`
  height: 30px;

  @media (min-width: ${screenSize.medium}) {
    display: none;
  }
`;

const Username = styled.span`
  margin-right: 15px;

  @media (max-width: ${screenSize.medium}) {
    display: none;
  }
`;

const Header = () => {
  return (
    <Container>
      <RedditLogo src={redditLogo} />
      <RedditIcon src={redditIcon} />
      <SearchBar
        placeholder={'Type a subreddit name'}
        onSearchTextChanged={() => {
          return 'hi';
        }}
      />
      <Username>Cathal Mac Donnacha</Username>
      <Avatar src={userProfileImage} />
    </Container>
  );
};

export default Header;
