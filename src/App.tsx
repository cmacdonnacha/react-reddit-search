import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Header from 'components/Header';
import Page from 'components/Page';

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

      <Page />
    </Layout>
  );
}

export default App;
