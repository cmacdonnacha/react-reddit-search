import React from 'react';
import App from './App';
import { renderWithRedux } from 'utils/test-utils';
import { screen, waitForElementToBeRemoved, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';

// Mock the Axios module. This ensure we don't call a real rest api while running tests.
jest.mock('axios');

// This line simply resolves the typescript errors caused when using jest.mock('axios').
const axiosMock = axios as jest.Mocked<typeof axios>;

const mockPosts = [
  {
    data: {
      id: '74gn-3233',
      title: 'Galway man becomes worlds best front end developer',
      subreddit: 'ReactJS',
      thumbnail: 'fakeThumbnail.png',
      ups: 10000,
    },
  },
];

// We could use a beforeEach here but this way it's easier to keep track of what your tests are doing.
const fetchMockPosts = () => {
  axiosMock.get.mockResolvedValueOnce({
    data: {
      data: {
        children: mockPosts,
        after: '47j922',
        before: '93g20f',
      },
    },
  });
};

// Give each test a clean slate.
beforeEach(() => axiosMock.get.mockReset());

test('should render Results page as default', () => {
  renderWithRedux(<App />);
  const element = screen.getByText('Loading', { exact: false });
  expect(element).toBeInTheDocument();
});

test('should display error message when subreddit not found', async () => {
  // Setup
  fetchMockPosts();
  renderWithRedux(<App />);

  // Wait for loading text to disappear so we know the mocked posts have been fetched and displayed
  await waitForElementToBeRemoved(() => screen.queryByText('Loading posts', { exact: false }));

  // Type in some text
  const searchInput = screen.getByRole('searchbox');
  fireEvent.change(searchInput, { target: { value: 'bla' } });

  // Wait for error message to appear after search completes
  const element = await waitFor(() => screen.getByText(`Oops! Couldn't find subreddit.`));

  // Should find error message
  expect(element).toBeInTheDocument();
});
