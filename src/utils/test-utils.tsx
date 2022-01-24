import React from 'react';
import { render } from '@testing-library/react';
import rootReducer from 'slices';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { initialState as postsInitialState } from 'slices/postsSlice';
import { RootState } from 'slices';

const rootInitialState: RootState = {
  posts: postsInitialState,
};

export function renderWithRedux(ui: JSX.Element, initialState: object = rootInitialState) {
  const state = initialState;
  const myStore = configureStore({ reducer: rootReducer, preloadedState: state });

  return {
    ...render(<Provider store={myStore}>{ui}</Provider>),
    history,
  };
}
