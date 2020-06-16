import React from 'react';
import styled from 'styled-components/macro';
import Header from 'components/Header';
import PostsPage from 'components/PostsPage';

const Layout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

function App(): JSX.Element {
  return (
    <Layout>
      <Header />
      <PostsPage />
    </Layout>
  );
}

export default App;
