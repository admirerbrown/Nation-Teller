import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import Filter from '../components/Filter';
import { filter } from '../Redux/home/homeSlice';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('Filter component', () => {
  it('dispatches the filter action with the input value', () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    const { getByPlaceholderText } = render(<Filter />);
    const input = getByPlaceholderText('Enter search..');

    fireEvent.change(input, { target: { value: 'test' } });

    expect(dispatch).toHaveBeenCalledWith(filter('test'));
  });
});
