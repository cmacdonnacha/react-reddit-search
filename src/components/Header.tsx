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
import debounce from 'lodash/debounce';

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
    dispatch(searchTextUpdated(text));
    dispatch(fetchPosts());
  };

  // Only perform the search 500ms after the user has stopped typing.
  // This helps reduce unnecessary network requests
  const debouncedSearch = debounce(handleSearchTextChanged, 500);

  return (
    <Container>
      <RedditLogo src={redditLogo} />
      <RedditIcon src={redditIcon} />
      <SearchBar placeholder={'Type a subreddit name'} onSearchTextChanged={debouncedSearch} value={searchText} type="search" />
      <Username>Cathal Mac Donnacha</Username>
      <Avatar src={userProfileImage} />
    </Container>
  );
};

export default Header;
