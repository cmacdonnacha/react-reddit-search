import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { screenSize } from 'constants/screenSizes';
import redditLogo from 'assets/reddit-logo.png';
import redditIcon from 'assets/reddit-icon.png';
import SearchBar from './SearchBar';
import userProfileImage from 'assets/user-profile.png';
import Avatar from './Avatar';
import { useDispatch } from 'react-redux';
import { searchTextUpdated, fetchPosts } from 'slices/postsSlice';

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
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');

  const handleSearchTextChanged = (text: string) => {
    setSearchText(text);
  };

  const handleOnEnter = () => {
    dispatch(searchTextUpdated(searchText));
    dispatch(fetchPosts());
  };

  return (
    <Container>
      <RedditLogo src={redditLogo} />
      <RedditIcon src={redditIcon} />
      <SearchBar
        placeholder={'Type subreddit name and press enter'}
        onSearchTextChanged={handleSearchTextChanged}
        onEnter={handleOnEnter}
      />
      <Username>Cathal Mac Donnacha</Username>
      <Avatar src={userProfileImage} />
    </Container>
  );
};

export default Header;
