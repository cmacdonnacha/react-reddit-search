import React from 'react';
import App from './App';
import { renderWithRedux } from 'utils/test-utils';
import { screen } from '@testing-library/react';

test('should render Results page as default', () => {
  // Arrange
  renderWithRedux(<App />);

  // Act
  const element = screen.getByText('Loading', { exact: false });

  // Assert
  expect(element).toBeInTheDocument();
});
