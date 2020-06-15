import React from 'react';
import App from './App';
import { renderWithRedux } from 'utils/test-utils';
import { screen } from '@testing-library/react';

test('should render Posts page as default', () => {
  // Arrange
  renderWithRedux(<App />);

  // Act
  const element = screen.getByText('Posts');

  // Assert
  expect(element).toBeInTheDocument();
});
