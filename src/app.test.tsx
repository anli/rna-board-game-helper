import {render} from '@testing-library/react-native';
import React from 'react';
import {App} from './app';

describe('App', () => {
  it('App can load', () => {
    const {getByTestId} = render(<App />);
    expect(getByTestId('HomeScreen')).toBeDefined();
  });
});
