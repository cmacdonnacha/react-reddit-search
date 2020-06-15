import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.header`
  grid-area: header;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 20px;
`;

const Header = () => {
  return (
    <Container>
      <h1>Header</h1>
    </Container>
  );
};

export default Header;
