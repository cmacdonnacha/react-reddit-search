import React from 'react';
import styled from 'styled-components/macro';
import Header from 'components/Header';
import ResultsPage from 'components/ResultsPage';

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
      <ResultsPage />
    </Layout>
  );
}

export default App;
