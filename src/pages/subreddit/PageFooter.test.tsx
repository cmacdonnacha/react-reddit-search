import React from 'react';
import SubredditPage from './SubredditPage';
import { renderWithRedux } from 'utils/test-utils';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
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
      // subreddit: 'reactjs',
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

test('should not display previous button by default', async () => {
  // Setup
  fetchMockPosts();
  renderWithRedux(<SubredditPage />);

  // Wait for loading text to disappear so we know the mocked posts have been fetched and displayed
  await waitForElementToBeRemoved(() => screen.queryByText('Loading posts', { exact: false }));

  // Should not find the previous button
  expect(screen.queryByRole('button', { name: 'Previous' })).not.toBeInTheDocument();
});

test('should display next button by default', async () => {
  // Setup
  fetchMockPosts();
  renderWithRedux(<SubredditPage />);

  // Wait for loading text to disappear so we know the mocked posts have been fetched and displayed
  await waitForElementToBeRemoved(() => screen.queryByText('Loading posts', { exact: false }));

  // Should find the 'Next' button
  expect(screen.queryByRole('button', { name: 'Next' })).toBeInTheDocument();
});

test('should display previous button after clicking the next button', async () => {
  // Setup
  fetchMockPosts();
  renderWithRedux(<SubredditPage />);

  // Wait for loading text to disappear so we know the mocked posts have been fetched and displayed
  await waitForElementToBeRemoved(() => screen.queryByText('Loading posts', { exact: false }));

  // Click on the Next button
  screen.getByRole('button', { name: 'Next' }).click();

  // Should find the 'Previous' button
  expect(screen.queryByRole('button', { name: 'Previous' })).toBeInTheDocument();
});

test('should display correct page number after clicking the next button', async () => {
  // Setup
  fetchMockPosts();
  renderWithRedux(<SubredditPage />);

  // Wait for loading text to disappear so we know the mocked posts have been fetched and displayed
  await waitForElementToBeRemoved(() => screen.queryByText('Loading posts', { exact: false }));

  // Click on the Next button
  screen.getByRole('button', { name: 'Next' }).click();

  // Should find the 'Page 2' label
  expect(screen.getByText('Page 2')).toBeInTheDocument();
});

test('should not display page number by default', async () => {
  // Setup
  fetchMockPosts();
  renderWithRedux(<SubredditPage />);

  // Wait for loading text to disappear so we know the mocked posts have been fetched and displayed
  await waitForElementToBeRemoved(() => screen.queryByText('Loading posts', { exact: false }));

  // Should not display any page number
  expect(screen.queryByText('Page', { exact: false })).not.toBeInTheDocument();
});

test('should not display page number after clicking next button and previous button', async () => {
  // Setup
  fetchMockPosts();
  renderWithRedux(<SubredditPage />);

  // Wait for loading text to disappear so we know the mocked posts have been fetched and displayed
  await waitForElementToBeRemoved(() => screen.queryByText('Loading posts', { exact: false }));

  // Click on the Next button
  screen.getByRole('button', { name: 'Next' }).click();

  // Click on the Previous button
  screen.getByRole('button', { name: 'Previous' }).click();

  // Should not display any page number
  expect(screen.queryByText('Page', { exact: false })).not.toBeInTheDocument();
});
