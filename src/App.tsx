import React from 'react';
import styled from 'styled-components/macro';
import Header from 'components/Header';
import SubredditPage from 'pages/subreddit/SubredditPage';

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
      <SubredditPage />
    </Layout>
  );
}

export default App;
