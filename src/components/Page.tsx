import React from 'react';
import styled from 'styled-components/macro';
import { colours } from 'constants/colours';
import Posts from './Posts';

const Container = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: white;
  margin: 20px;
  border-radius: 5px;

  & h1 {
    margin: 0;
    color: ${colours.navy};
  }
`;

const Content = styled.article`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: white;
  overflow-y: auto;
  align-items: center;
  border-radius: 5px;
`;

const Page = () => {
  return (
    <Container>
      <Content>
        <h1>/r/reactjs</h1>
        <Posts />
      </Content>
    </Container>
  );
};

export default Page;
