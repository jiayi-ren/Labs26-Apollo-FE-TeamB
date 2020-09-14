import React from 'react';
import { render, cleanup, wait, waitFor } from '@testing-library/react';
import { HomePage } from '../components/pages/Home';
import { LoadingComponent } from '../components/common';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { apolloReducer } from '../state/reducers/apolloReducer';

const store = createStore(apolloReducer, applyMiddleware(thunk, logger));

afterEach(cleanup);

jest.mock('@okta/okta-react', () => ({
  useOktaAuth: () => {
    return {
      authState: {
        isAuthenticated: true,
      },
      authService: {
        getUser: () => Promise.resolve({ name: 'sara' }),
      },
    };
  },
}));

describe('<HomeContainer /> testing suite', () => {
  test('mounts a page', async () => {
    const { findByText, getByText, queryByText } = render(
      <Provider store={store}>
        <Router>
          <HomePage
            LoadingComponent={() => (
              <LoadingComponent message="...fetching profile" />
            )}
          />
        </Router>
      </Provider>
    );
    let loader = getByText(/...fetching profile/i);
    expect(loader).toBeInTheDocument();
    await waitFor(async () => {
      await findByText(/sara/i);
    });
    loader = queryByText(/...fetching profile/i);
    expect(loader).toBeNull();
  });
});
