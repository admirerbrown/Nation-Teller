import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import HomePage from '../components/home/HomePage';
import store from '../Redux/configureStore';

describe('Home Test', () => {
  test('to render all countries: ', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
