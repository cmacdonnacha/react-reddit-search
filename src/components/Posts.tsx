import React, { useEffect } from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const Posts = () => {
  useEffect(() => {
    console.log('fetch subrredit posts');
  });

  return <Container>Posts</Container>;
};

export default Posts;
