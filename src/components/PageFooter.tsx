import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { useDispatch } from 'react-redux';
import { fetchPreviousPosts, fetchNextPosts } from 'slices/postsSlice';
import Button from './Button';

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
  const [pageNumber, setPageNumber] = useState<number>(1);
  const dispatch = useDispatch();

  const onNextPressed = () => {
    dispatch(fetchNextPosts());
    setPageNumber(pageNumber + 1);
  };

  const onPreviousPressed = () => {
    dispatch(fetchPreviousPosts());
    setPageNumber(pageNumber - 1);
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
