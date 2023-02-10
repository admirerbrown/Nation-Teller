import React from 'react';
import { useDispatch, Provider } from 'react-redux';
import { render, fireEvent, act } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { filter } from '../Redux/home/homeSlice';
import Filter from '../components/Filter';

const mockStore = configureStore([]);

describe('Filter component', () => {
  test('filter input changes and dispatches the correct action', () => {
    const store = mockStore({});
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <Filter />
      </Provider>,
    );
    const input = getByPlaceholderText('Enter search..');

    act(() => {
      fireEvent.change(input, { target: { value: 'test' } });
    });

    expect(dispatch).toHaveBeenCalledWith(filter('test'));
  });
});
