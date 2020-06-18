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

describe('Fetching Posts', () => {
  test('should find and display posts', async () => {
    // Setup
    fetchMockPosts();
    renderWithRedux(<SubredditPage />);

    // Wait for loading text to disappear so we know the mocked posts have been fetched and displayed
    await waitForElementToBeRemoved(() => screen.queryByText('Loading posts', { exact: false }));

    // Find the post title
    expect(screen.getByText('Galway man becomes worlds best front end developer')).toBeInTheDocument();
  });

  test('should display upvotes', async () => {
    // Setup
    fetchMockPosts();
    renderWithRedux(<SubredditPage />);

    // Wait for loading text to disappear so we know the mocked posts have been fetched and displayed
    await waitForElementToBeRemoved(() => screen.queryByText('Loading posts', { exact: false }));

    // Find upvotes label
    expect(screen.getByText('10000')).toBeInTheDocument();
  });

  test('should display subreddit title', async () => {
    // Setup
    fetchMockPosts();
    renderWithRedux(<SubredditPage />);

    // Wait for loading text to disappear so we know the mocked posts have been fetched and displayed
    await waitForElementToBeRemoved(() => screen.queryByText('Loading posts', { exact: false }));

    // Find subreddit heading
    expect(screen.getByRole('heading', { name: 'ReactJS' })).toBeInTheDocument();
  });
});

describe('Error and Loading states', () => {
  test('should display loading text while fetching posts', async () => {
    // Setup
    fetchMockPosts();
    renderWithRedux(<SubredditPage />);

    // Should find loading text
    expect(screen.getByText(`Loading posts...`)).toBeInTheDocument();
  });

  test('should display error message when an error occurs while fetching posts', async () => {
    // Setup
    renderWithRedux(<SubredditPage />);

    // Wait for loading text to disappear so we know the mocked posts have been fetched and displayed
    await waitForElementToBeRemoved(() => screen.queryByText('Loading posts', { exact: false }));

    // Should find error message
    expect(screen.getByText(`Oops! Couldn't find subreddit.`)).toBeInTheDocument();
  });
});
