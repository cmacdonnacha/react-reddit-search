import React from 'react';
import styled from 'styled-components/macro';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPreviousPosts, fetchNextPosts, postsSelector, pageNumberUpdated } from 'slices/postsSlice';
import Button from 'components/Button';

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: white;
  max-height: 30px;
`;

const PageNumber = styled.span`
  padding: 0 10px;
`;

const PageFooter = () => {
  // Setting pageNumber in store. This allows us to easily reset it later when changing sort option.
  const { pageNumber } = useSelector(postsSelector);
  const dispatch = useDispatch();

  const onNextPressed = () => {
    dispatch(fetchNextPosts());
    dispatch(pageNumberUpdated(pageNumber + 1));
  };

  const onPreviousPressed = () => {
    dispatch(fetchPreviousPosts());
    dispatch(pageNumberUpdated(pageNumber - 1));
  };

  const renderFooter = () => {
    if (pageNumber === 1) {
      return (
        <Footer>
          <Button onClick={onNextPressed}>Next</Button>
        </Footer>
      );
    }

    return (
      <Footer>
        <Button onClick={onPreviousPressed}>Previous</Button>
        <PageNumber>Page {pageNumber}</PageNumber>
        <Button onClick={onNextPressed}>Next</Button>
      </Footer>
    );
  };

  return renderFooter();
};

export default PageFooter;
